import React, { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import Alumnos from './components/Alumnos';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // 10 segundos de espera

    return () => clearTimeout(timer); // Limpia el temporizador cuando el componente se desmonte
  }, []);

  return (
    <div className="appContainer">
         {isLoading ? <LoadingPage /> : <Alumnos />}
    </div>
  );
};

export default App;

