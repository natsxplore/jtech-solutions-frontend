function BlockUI({ 
    blocking = false, 
    message = 'Please wait...', 
    fullScreen = true,
    zIndex = 9999,
    children 
}) {
    if (!blocking) {
        return children || null;
    }

    const overlayClasses = fullScreen
        ? 'fixed inset-0'
        : 'absolute inset-0';

    return (
        <>
        <div
            className={`${overlayClasses} bg-black/40 backdrop-blur-sm flex items-center justify-center`}
            style={{ zIndex: zIndex }}
        >
            <div className="bg-white rounded-xl shadow-2xl p-6 lg:p-8 max-w-sm w-[calc(100vw-2rem)] mx-4 flex flex-col items-center gap-4 lg:gap-5">
                <div className="relative w-12 h-12 lg:w-14 lg:h-14">
                    <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>

                <div className="text-center">
                    <p className="text-sm lg:text-base font-semibold text-gray-900 mb-1">
                    {message}
                    </p>
                    <p className="text-xs lg:text-sm text-gray-500">
                    This may take a few moments
                    </p>
                </div>

                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>

        {!fullScreen && children && (
            <div className="opacity-50 pointer-events-none">
            {children}
            </div>
        )}
        </>
    );
}

export default BlockUI;
