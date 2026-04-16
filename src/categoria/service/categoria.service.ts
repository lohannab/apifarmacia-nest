import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) { }

  async create(categoria: Categoria) {
    const busca = await this.categoriaRepository.findOne({
      where: { nome: categoria.nome }
    });

    if (busca) {
      throw new BadRequestException('Categoria já existe!');
    }

    const novaCategoria = await this.categoriaRepository.save(categoria);

    return {
      mensagem: 'Categoria criada com sucesso!',
      id: novaCategoria.id,
      dados: novaCategoria
    };
  }

  findAll() {
    return this.categoriaRepository.find();
  }

  async findOne(id: number) {
    const categoria = await this.categoriaRepository.findOneBy({ id });

    if (!categoria) {
      throw new NotFoundException('Categoria não encontrada!');
    }

    return categoria;
  }

  async findByNome(nome: string) {
    const categorias = await this.categoriaRepository.find({
      where: {
        nome: ILike(`${nome}%`)
      }
    });

    if (categorias.length === 0) {
      throw new NotFoundException('Nenhuma categoria encontrada com esse nome!');
    }

    return categorias;
  }

  async update(id: number, categoria: Categoria) {
    const busca = await this.categoriaRepository.findOneBy({ id });

    if (!busca) {
      throw new NotFoundException('Categoria não encontrada!');
    }

    const categoriaAtualizada = await this.categoriaRepository.save({
      ...categoria,
      id,
    });

    return {
      mensagem: 'Categoria atualizada com sucesso!',
      id: categoriaAtualizada.id,
      dados: categoriaAtualizada,
    };
  }

  async remove(id: number) {
    const busca = await this.categoriaRepository.findOneBy({ id });

    if (!busca) {
      throw new NotFoundException('Categoria não encontrada!');
    }

    await this.categoriaRepository.delete(id);

    return {
      mensagem: 'Categoria deletada com sucesso!',
      id: id
    };
  }
}