import React, { useEffect, useState } from 'react';
import styles from './styles/LoadingPage.module.scss';

import logo1 from '../assets/nestjslogo.webp';
import logo2 from '../assets/react.svg';

const LoadingPage: React.FC = () => {
  const [currentLogo, setCurrentLogo] = useState(logo1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prevLogo) => (prevLogo === logo1 ? logo2 : logo1));
    }, 3000); // Cambia de logo cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, []);

  return (
    <div className={styles.loadingContainer}>
     
      <img src={currentLogo} alt="Logo" className={styles.logo} />
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingPage;
