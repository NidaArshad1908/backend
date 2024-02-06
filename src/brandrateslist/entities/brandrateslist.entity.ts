import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'brand_rates_list' })
export class Brandrateslist {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the brandrateslist todo',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'Brandrate List Brandrate Name',
    description: 'Title of the Brandrate List',
  })
  name: string;

  @Column()
  @ApiProperty({
    example: 'Brandrate List Price',
    description: 'Title of the Brandrate List',
  })
  price: string;

  @Column()
  @ApiProperty({
    example: 'Brandrate List Added By',
    description: 'Title of the Brandrate List',
  })
  addedby: string;

  @Column()
  @ApiProperty({
    example: 'Brandrate List Modified By',
    description: 'Title of the Brandrate List',
  })
  modifiedby: string;

  @Column()
  @ApiProperty({
    example: 'Brandrate List Created',
    description: 'Title of the Brandrate List',
  })
  created: string;

  @Column()
  @ApiProperty({
    example: 'Brandrate List Last Updated',
    description: 'Title of the Brandrate List',
  })
  lastupdated: string;

  @Column()
  @ApiProperty({
    example: 'Brandrate List Actions',
    description: 'Title of the Brandrate List',
  })
  actions: string;
}
