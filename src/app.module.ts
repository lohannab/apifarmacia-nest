import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { DevService } from './data/services/dev.service';
import { ProdService } from './data/services/prod.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),

  TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useClass: process.env.DATABASE_URL ? ProdService : DevService,
}),
    CategoriaModule,
  ],
})
export class AppModule { }