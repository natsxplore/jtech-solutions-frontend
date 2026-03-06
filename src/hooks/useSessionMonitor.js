/**
 * useSessionMonitor Hook - Monitors session expiration based on backend
 * 
 * BEST PRACTICE APPROACH:
 * 1. Backend is the source of truth for session expiration (Laravel Sanctum)
 * 2. Frontend periodically checks backend session validity
 * 3. Frontend tracks idle time for UX (warnings, notifications)
 * 4. When backend returns 401 → Auto logout (session expired)
 * 5. When idle timeout reached → Auto logout (but backend should also expire)
 * 
 * This ensures security (backend controls) + good UX (frontend warnings)
 */

import { useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { showError, showInfo } from '../utils/notifications';

export const useSessionMonitor = ({
  checkInterval = 2, // minutes - check backend session every 2 minutes
  idleTimeout = 8, // minutes - show warning after 8 minutes idle (UX only)
  warningTime = 2, // minutes - show warning 2 minutes before backend expiration
} = {}) => {
    const navigate = useNavigate();
    const sessionCheckTimerRef = useRef(null);
    const idleTimerRef = useRef(null);
    const warningTimerRef = useRef(null);
    const lastActivityRef = useRef(Date.now());
    const warningShownRef = useRef(false);

    // Clear all timers
    const clearAllTimers = useCallback(() => {
        if (sessionCheckTimerRef.current) {
            clearInterval(sessionCheckTimerRef.current);
            sessionCheckTimerRef.current = null;
        }
        if (idleTimerRef.current) {
            clearTimeout(idleTimerRef.current);
            idleTimerRef.current = null;
        }
        if (warningTimerRef.current) {
            clearTimeout(warningTimerRef.current);
            warningTimerRef.current = null;
        }
    }, []);

    // Logout function
    const handleLogout = useCallback(async (reason = 'Session expired') => {
        clearAllTimers();
        
        try {
            await authService.logout();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            localStorage.removeItem('auth_token');
        
            if (reason.includes('expired')) {
                showError('Session Expired', 'Your session has expired. Please login again.');
            } else {
                showError('Logged Out', 'You have been logged out due to inactivity.');
            }
            
            navigate('/');
        }
    }, [clearAllTimers, navigate]);

    // Check session validity with backend (PRIMARY METHOD - Backend is source of truth)
    const checkSessionValidity = useCallback(async () => {
        const token = localStorage.getItem('auth_token');
        if (!token) {
            return false;
        }

        try {
            await authService.getCurrentUser();
            return true;
        } catch (error) {
            if (error.response?.status === 401) {
                handleLogout('Session expired');
                return false;
            }
            return true;
        }
    }, [handleLogout]);

    // Reset idle timer (for UX warnings only)
    const resetIdleTimer = useCallback(() => {
        lastActivityRef.current = Date.now();
        warningShownRef.current = false;

        // Clear existing idle timers
        if (idleTimerRef.current) {
            clearTimeout(idleTimerRef.current);
        }
        if (warningTimerRef.current) {
            clearTimeout(warningTimerRef.current);
        }

        // Set warning timer (UX only - backend still controls actual expiration)
        const warningTimeoutMs = (idleTimeout - warningTime) * 60 * 1000;
        if (warningTimeoutMs > 0) {
            warningTimerRef.current = setTimeout(() => {
                showInfo(
                'Session Expiring Soon',
                `Your session will expire soon due to inactivity. Please interact with the page to stay logged in.`
                );
                warningShownRef.current = true;
            }, warningTimeoutMs);
        }

        // Set idle timeout (UX logout - but backend should also expire around this time)
        const idleTimeoutMs = idleTimeout * 60 * 1000;
        idleTimerRef.current = setTimeout(() => {
            // Frontend idle timeout reached - logout
            // Note: Backend should also expire around this time (SANCTUM_EXPIRATION)
            handleLogout('Inactivity');
        }, idleTimeoutMs);
    }, [idleTimeout, warningTime, handleLogout]);

    // Initialize session monitoring
    useEffect(() => {
        const token = localStorage.getItem('auth_token');
        if (!token) {
            return;
        }

        // Activity events to reset idle timer
        const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
        
        const handleActivity = () => {
            resetIdleTimer();
        };

        // Add event listeners for activity tracking
        activityEvents.forEach((event) => {
            document.addEventListener(event, handleActivity, true);
        });

        // PRIMARY: Periodic backend session validation (every checkInterval minutes)
        // Backend is the source of truth - if backend says expired, logout immediately
        const checkIntervalMs = checkInterval * 60 * 1000;
        sessionCheckTimerRef.current = setInterval(() => {
            checkSessionValidity();
        }, checkIntervalMs);

        // Initial session check
        checkSessionValidity();

        // SECONDARY: Frontend idle tracking (for UX warnings)
        resetIdleTimer();

        // Cleanup
        return () => {
            activityEvents.forEach((event) => {
                document.removeEventListener(event, handleActivity, true);
            });
            clearAllTimers();
        };
    }, [checkSessionValidity, resetIdleTimer, checkInterval, clearAllTimers]);

    return {
        resetIdleTimer, // Expose function to manually reset timer if needed
        checkSessionValidity, // Expose function to manually check session
    };
};

export default useSessionMonitor;
