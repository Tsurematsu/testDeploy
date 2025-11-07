import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Forzar el scroll al inicio de forma inmediata
    window.scrollTo(0, 0);
    
    // Como respaldo, también resetear el scroll del documento
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Asegurarnos que el contenedor principal también se resetee
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  }, [location]);

  return null;
};

export default ScrollToTop;