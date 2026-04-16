import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number;

    @ApiProperty()
    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nome!: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    descricao!: string;
}