import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'workers_list' })
export class Workerslist {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the Workerslist todo',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'Workerslist Name',
    description: 'Title of the Workerslist',
  })
  name: string;

  @Column()
  @ApiProperty({
    example: 'Workerslist Phone',
    description: 'Title of the Workerslist',
  })
  phone: string;

  @Column()
  @ApiProperty({
    example: 'Workerslist Address',
    description: 'Title of the Workerslist',
  })
  address: string;

  @Column()
  @ApiProperty({
    example: 'Workerslist Added By',
    description: 'Title of the Workerslist',
  })
  addedby: string;

  @Column()
  @ApiProperty({
    example: 'Workerslist Modified By',
    description: 'Title of the Workerslist',
  })
  modifiedby: string;

  @Column()
  @ApiProperty({
    example: 'Workerslist Created',
    description: 'Title of the Workerslist',
  })
  created: string;

  @Column()
  @ApiProperty({
    example: 'Workerslist Last Updated',
    description: 'Title of the Workerslist',
  })
  lastupdated: string;

  @Column()
  @ApiProperty({
    example: 'Workerslist Actions',
    description: 'Title of the Workerslist',
  })
  actions: string;
}
