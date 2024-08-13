import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { Alumno } from './interfaces/alumnos.interface';

@Injectable()
export class AlumnosService {
  constructor(@InjectModel('Alumno') private readonly alumnoModel: Model<Alumno>) {}

  async create(createAlumnoDto: CreateAlumnoDto): Promise<Alumno> {
    const createdAlumno = new this.alumnoModel(createAlumnoDto);
    return createdAlumno.save();
  }

  async findByGrado(grado: string): Promise<Alumno[]> {
    return this.alumnoModel.find({ grado }).exec();
  }
}
