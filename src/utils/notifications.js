/**
 * Notifications Helper - Wrapper para sa Sileo toasts
 * Simple at reusable helper functions para sa success, error, at info messages
 *
 * Library docs: https://sileo.aaryan.design/docs
 */

import { sileo } from 'sileo';
import React from 'react';

const DEFAULT_DURATION = 4000;

export const showSuccess = (title, description) => {
  sileo.success({
    title,
    description,
    duration: DEFAULT_DURATION,
  });
};

export const showError = (title, description) => {
  const hasNewlines = typeof description === 'string' && description.includes('\n');
  
  const formattedDescription = hasNewlines
    ? React.createElement(
        'div',
        { style: { whiteSpace: 'pre-line' } },
        description
      )
    : description;

  sileo.error({
    title,
    description: formattedDescription,
    duration: DEFAULT_DURATION,
  });
};

export const showInfo = (title, description) => {
  sileo.info({
    title,
    description,
    duration: DEFAULT_DURATION,
  });
};

export const confirmWithToast = async ({ title, message, onConfirm }) => {
  const ok = window.confirm(message || title);
  if (!ok) {
    showInfo('Action cancelled', 'Hindi itinuloy ang action.');
    return false;
  }

  try {
    await onConfirm?.();
    showSuccess('Action confirmed', title);
    return true;
  } catch (err) {
    showError('Action failed', err?.message || 'May nangyaring error.');
    return false;
  }
};

export default {
  showSuccess,
  showError,
  showInfo,
  confirmWithToast,
};

