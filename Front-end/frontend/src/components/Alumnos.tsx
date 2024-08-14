import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import styles from './styles/Alumnos.module.scss';

interface Alumno {
  _id?: string;
  nombre: string;
  fechaNacimiento: string;
  nombrePadre: string;
  nombreMadre: string;
  grado: string;
  seccion: string;
  fechaIngreso: string;
}

const Alumnos: React.FC = () => {
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);
  const [grado, setGrado] = useState<string>('5to grado'); // Estado para manejar el grado seleccionado
  const [nuevoAlumno, setNuevoAlumno] = useState<Alumno>({
    nombre: '',
    fechaNacimiento: '',
    nombrePadre: '',
    nombreMadre: '',
    grado: '',
    seccion: '',
    fechaIngreso: '',
  });

  useEffect(() => {
    fetchAlumnos();
  }, []);

  const fetchAlumnos = async (gradoSeleccionado: string = grado) => {
    try {
      const response = await axios.get<Alumno[]>(`http://localhost:3000/alumnos/consultar-alumno/${encodeURIComponent(gradoSeleccionado)}`, {
        headers: { 'x-api-key': 'DanielBarrera' },
      });
      setAlumnos(response.data);
    } catch (error) {
      console.error('Error fetching alumnos:', error);
    }
  };

  const addAlumno = async () => {
    try {
      await axios.post('http://localhost:3000/alumnos/crear-alumno', nuevoAlumno, {
        headers: { 'x-api-key': 'DanielBarrera' },
      });
      fetchAlumnos(); // Actualiza la lista de alumnos después de añadir uno nuevo
      setNuevoAlumno({
        nombre: '',
        fechaNacimiento: '',
        nombrePadre: '',
        nombreMadre: '',
        grado: '',
        seccion: '',
        fechaIngreso: '',
      }); // Limpia el formulario
    } catch (error) {
      console.error('Error adding alumno:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNuevoAlumno({
      ...nuevoAlumno,
      [e.target.name]: e.target.value,
    });
  };

  const handleGradoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGrado(e.target.value);
  };

  const handleFiltrarClick = () => {
    fetchAlumnos(grado);
  };

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className={styles.title}>Gestión de Alumnos</h1>

      <motion.div 
        className={styles.formContainer}
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <h2>Añadir Alumno</h2>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nuevoAlumno.nombre}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="date"
          name="fechaNacimiento"
          placeholder="Fecha de Nacimiento"
          value={nuevoAlumno.fechaNacimiento}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="nombrePadre"
          placeholder="Nombre del Padre"
          value={nuevoAlumno.nombrePadre}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="nombreMadre"
          placeholder="Nombre de la Madre"
          value={nuevoAlumno.nombreMadre}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="grado"
          placeholder="Grado"
          value={nuevoAlumno.grado}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="seccion"
          placeholder="Sección"
          value={nuevoAlumno.seccion}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="date"
          name="fechaIngreso"
          placeholder="Fecha de Ingreso"
          value={nuevoAlumno.fechaIngreso}
          onChange={handleChange}
          className={styles.input}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addAlumno}
          className={styles.button}
        >
          Añadir Alumno
        </motion.button>
      </motion.div>

      <motion.div 
        className={styles.formContainer}
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <h2>Filtrar por Grado</h2>
        <select value={grado} onChange={handleGradoChange} className={styles.select}>
          <option value="1er grado">1er grado</option>
          <option value="2do grado">2do grado</option>
          <option value="3er grado">3er grado</option>
          <option value="4to grado">4to grado</option>
          <option value="5to grado">5to grado</option>
          <option value="6to grado">6to grado</option>
        </select>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleFiltrarClick}
          className={styles.button}
        >
          Filtrar
        </motion.button>
      </motion.div>

      <motion.div 
        className={styles.listContainer}
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <h2>Lista de Alumnos</h2>
        <ul className={styles.alumnoList}>
          {alumnos.map((alumno) => (
            <motion.li 
              key={alumno._id}
              className={styles.alumnoItem}
              whileHover={{ scale: 1.05 }}
            >
              <strong>{alumno.nombre}</strong> - {alumno.grado} ({alumno.seccion})
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Alumnos;
