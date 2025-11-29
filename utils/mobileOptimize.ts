// Hook para otimizar viewport mobile
export const useMobileOptimizations = () => {
  const setViewport = () => {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute(
        'content',
        'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover'
      );
    }
  };

  const disableZoomOnInputFocus = () => {
    // Prevenir zoom ao focar em input em iOS
    document.addEventListener('touchstart', (e) => {
      if ((e.target as HTMLElement).tagName === 'INPUT') {
        (e.target as HTMLInputElement).style.fontSize = '16px';
      }
    });
  };

  return {
    setViewport,
    disableZoomOnInputFocus,
  };
};
