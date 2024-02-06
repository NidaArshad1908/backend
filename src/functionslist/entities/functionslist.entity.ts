import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'functions_list' })
export class Functionslist {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the functionslist todo',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'Function List Functions',
    description: 'Title of the Function List',
  })
  functions: string;

  @Column()
  @ApiProperty({
    example: 'Function List Actions',
    description: 'Title of the Function List',
  })
  actions: string;
}
