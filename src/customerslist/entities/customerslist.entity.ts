import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'customers_list' })
export class Customerslist {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the Customers list todo',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'Customers List Country Name',
    description: 'Title of the Customers List',
  })
  size: string;

  @Column()
  @ApiProperty({
    example: 'Customers List Code',
    description: 'Title of the Customers List',
  })
  name: string;

  @Column()
  @ApiProperty({
    example: 'Customers List Country Name',
    description: 'Title of the Customers List',
  })
  phone: string;

  @Column()
  @ApiProperty({
    example: 'Customers List Code',
    description: 'Title of the Customers List',
  })
  date: string;

  @Column()
  @ApiProperty({
    example: 'Customers List Code',
    description: 'Title of the Customers List',
  })
  dues: string;

  @Column()
  @ApiProperty({
    example: 'Customers List Added By',
    description: 'Title of the Customers List',
  })
  addedby: string;

  @Column()
  @ApiProperty({
    example: 'Customers List Modified By',
    description: 'Title of the Customers List',
  })
  modifiedby: string;

  @Column()
  @ApiProperty({
    example: 'Customers List Created',
    description: 'Title of the Customers List',
  })
  created: string;

  @Column()
  @ApiProperty({
    example: 'Customers List Last Updated',
    description: 'Title of the Customers List',
  })
  lastupdated: string;

  @Column()
  @ApiProperty({
    example: 'Customers List Actions',
    description: 'Title of the Customers List',
  })
  actions: string;

  @Column()
  @ApiProperty({
    example: 'Customers List Code',
    description: 'Title of the Customers List',
  })
  select: string;

  @Column()
  @ApiProperty({
    example: 'Customers List Code',
    description: 'Title of the Customers List',
  })
  sms: string;
}
