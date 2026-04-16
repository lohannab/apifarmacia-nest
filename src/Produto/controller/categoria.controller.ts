import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Categoria } from '../entities/categoria.entity';
import { CategoriaService } from '../service/categoria.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categorias')
@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) { }

  @Post()
  create(@Body() categoria: Categoria) {
    return this.categoriaService.create(categoria);
  }

  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.categoriaService.findOne(id);
  }

  @Get('/nome/:nome')
  findByNome(@Param('nome') nome: string) {
    return this.categoriaService.findByNome(nome);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() categoria: Categoria) {
    return this.categoriaService.update(Number(id), categoria);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.categoriaService.remove(id);
  }
}