import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id!: number;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nome!: string;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    descricao!: string;
}