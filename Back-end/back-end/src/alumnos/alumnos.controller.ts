import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { Alumno } from './interfaces/alumnos.interface';
import { ApiKeyGuard } from '../auth/api-key.guard';  // Importa el guard

@Controller('alumnos')
@UseGuards(ApiKeyGuard)  // Aplica el guard a todas las rutas del controlador
export class AlumnosController {
  constructor(private readonly alumnosService: AlumnosService) {}

  @Post('crear-alumno')
  async create(@Body() createAlumnoDto: CreateAlumnoDto): Promise<Alumno> {
    return this.alumnosService.create(createAlumnoDto);
  }

  @Get('consultar-alumno/:grado')
  async findByGrado(@Param('grado') grado: string): Promise<Alumno[]> {
    return this.alumnosService.findByGrado(grado);
  }

  
}


