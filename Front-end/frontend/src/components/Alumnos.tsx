import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
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
  const [grado, setGrado] = useState<string>('5to grado');

  const { register, handleSubmit, reset } = useForm<Alumno>();

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

  const onSubmit: SubmitHandler<Alumno> = async (data) => {
    try {
      await axios.post('http://localhost:3000/alumnos/crear-alumno', data, {
        headers: { 'x-api-key': 'DanielBarrera' },
      });
      fetchAlumnos();
      reset();
    } catch (error) {
      console.error('Error adding alumno:', error);
    }
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Nombre"
            {...register('nombre', { required: true })}
            className={styles.input}
          />
       <label className={styles.label} htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
<input
  type="date"
  id="fechaNacimiento"
  {...register('fechaNacimiento', { required: true })}
  className={styles.input}
  aria-label="Fecha de Nacimiento"
/>

          <input
            type="text"
            placeholder="Nombre del Padre"
            {...register('nombrePadre', { required: true })}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Nombre de la Madre"
            {...register('nombreMadre', { required: true })}
            className={styles.input}
          />
          <select
            {...register('grado', { required: true })}
            className={styles.select}
          >
            <option value="1er grado">1er grado</option>
            <option value="2do grado">2do grado</option>
            <option value="3er grado">3er grado</option>
            <option value="4to grado">4to grado</option>
            <option value="5to grado">5to grado</option>
            <option value="6to grado">6to grado</option>
          </select>
          <input
            type="text"
            placeholder="Sección"
            {...register('seccion', { required: true })}
            className={styles.input}
          />
          <label className={styles.label} htmlFor="fechaNacimiento">Fecha de Ingreso</label>
          <input
            type="date"
            placeholder="Fecha de Ingreso"
            {...register('fechaIngreso', { required: true })}
            className={styles.input}
            aria-label="Fecha de Ingreso"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.button}
          >
            Añadir Alumno
          </motion.button>
        </form>
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Lista de Alumnos</h2>
        <table className={styles.alumnoTable}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Grado</th>
              <th>Sección</th>
              <th>Fecha de Ingreso</th>
            </tr>
          </thead>
          <motion.tbody
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {alumnos.map((alumno) => (
              <motion.tr 
                key={alumno._id}
                whileHover={{ scale: 1.02 }}
                className={styles.alumnoRow}
              >
                <td>{alumno.nombre}</td>
                <td>{alumno.grado}</td>
                <td>{alumno.seccion}</td>
                <td>{new Date(alumno.fechaIngreso).toLocaleDateString()}</td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </motion.div>
    </motion.div>
  );
};

export default Alumnos;
