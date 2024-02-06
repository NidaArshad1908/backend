import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'countries_list' })
export class Countrieslist {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the countrieslist todo',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'Countries List Country Name',
    description: 'Title of the Countries List',
  })
  name: string;

  @Column()
  @ApiProperty({
    example: 'Countries List Code',
    description: 'Title of the Countries List',
  })
  code: string;

  @Column()
  @ApiProperty({
    example: 'Countries List Added By',
    description: 'Title of the Countries List',
  })
  addedby: string;

  @Column()
  @ApiProperty({
    example: 'Countries List Modified By',
    description: 'Title of the Countries List',
  })
  modifiedby: string;

  @Column()
  @ApiProperty({
    example: 'Countries List Created',
    description: 'Title of the Countries List',
  })
  created: string;

  @Column()
  @ApiProperty({
    example: 'Countries List Last Updated',
    description: 'Title of the Countries List',
  })
  lastupdated: string;

  @Column()
  @ApiProperty({
    example: 'Countries List Actions',
    description: 'Title of the Countries List',
  })
  actions: string;
}
