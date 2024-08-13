import { Schema } from 'mongoose';

export const AlumnoSchema = new Schema({
  nombre: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  nombrePadre: { type: String, required: true },
  nombreMadre: { type: String, required: true },
  grado: { type: String, required: true },
  seccion: { type: String, required: true },
  fechaIngreso: { type: Date, required: true },
});
