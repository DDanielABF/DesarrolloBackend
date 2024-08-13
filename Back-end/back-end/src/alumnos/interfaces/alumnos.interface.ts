import { Document } from 'mongoose';

export interface Alumno extends Document {
  readonly nombre: string;
  readonly fechaNacimiento: Date;
  readonly nombrePadre: string;
  readonly nombreMadre: string;
  readonly grado: string;
  readonly seccion: string;
  readonly fechaIngreso: Date;
}
