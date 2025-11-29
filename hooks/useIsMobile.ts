import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verifica se é mobile na primeira renderização
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint do Tailwind
    };

    checkMobile();

    // Monitora mudanças de tamanho de tela
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return isMobile;
};
