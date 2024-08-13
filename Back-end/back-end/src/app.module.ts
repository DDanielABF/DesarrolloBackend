import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AlumnosModule } from './alumnos/alumnos.module';
import { ApiKeyGuard } from './auth/api-key.guard';  // Asegúrate de importar ApiKeyGuard

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',  // o 'db.env' según el nombre que uses
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const user = configService.get<string>('MONGODB_USER');
        const pass = configService.get<string>('MONGODB_PASSWORD');
        const cluster = configService.get<string>('MONGODB_CLUSTER');
        const database = configService.get<string>('MONGODB_DATABASE');
        const uri = `mongodb+srv://${user}:${pass}@${cluster}/${database}?retryWrites=true&w=majority`;
        return { uri };
      },
      inject: [ConfigService],
    }),
    AlumnosModule,
  ],
  providers: [ApiKeyGuard],  // Aquí registras ApiKeyGuard como proveedor
})
export class AppModule {}
