import { Module } from '@nestjs/common';
import { CategoriaController } from './controller/categoria.controller';
import { CategoriaService } from './service/categoria.service';
import { Categoria } from './entities/categoria.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  providers: [CategoriaService],
  controllers: [CategoriaController],
  exports: [CategoriaService],
})
export class CategoriaModule { }
