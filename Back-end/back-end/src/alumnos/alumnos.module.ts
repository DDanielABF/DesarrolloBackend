import { Module } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { AlumnosController } from './alumnos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AlumnoSchema } from './schemas/alumnos.schemas';
import { ConfigModule } from '@nestjs/config';
import { ApiKeyGuard } from '../auth/api-key.guard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Alumno', schema: AlumnoSchema }]),
    ConfigModule,  // Importa ConfigModule aquí para usar ConfigService
  ],
  controllers: [AlumnosController],
  providers: [AlumnosService, ApiKeyGuard],  // Registra ApiKeyGuard aquí
})
export class AlumnosModule {}
