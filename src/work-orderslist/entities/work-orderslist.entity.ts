import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'work_orders_list' })
export class WorkOrderslist {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the WorkOrderslist todo',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Status',
    description: 'Title of the WorkOrderslist',
  })
  status: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Size',
    description: 'Title of the WorkOrderslist',
  })
  size: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Name',
    description: 'Title of the WorkOrderslist',
  })
  name: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Order Date',
    description: 'Title of the WorkOrderslist',
  })
  orderdate: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Kameez',
    description: 'Title of the WorkOrderslist',
  })
  kameez: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Shalwar Kameez',
    description: 'Title of the WorkOrderslist',
  })
  shalwarkameez: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Pant',
    description: 'Title of the WorkOrderslist',
  })
  pant: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Kot',
    description: 'Title of the WorkOrderslist',
  })
  kot: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Waist Coat',
    description: 'Title of the WorkOrderslist',
  })
  waistcoat: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Cutting',
    description: 'Title of the WorkOrderslist',
  })
  cutting: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Shirt Cutting',
    description: 'Title of the WorkOrderslist',
  })
  shirtcutting: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Pant Cutting',
    description: 'Title of the WorkOrderslist',
  })
  pantcutting: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Stitching Cost',
    description: 'Title of the WorkOrderslist',
  })
  stitchingcost: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Design Cost',
    description: 'Title of the WorkOrderslist',
  })
  designcost: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Added By',
    description: 'Title of the WorkOrderslist',
  })
  addedby: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Modified By',
    description: 'Title of the WorkOrderslist',
  })
  modifiedby: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Created',
    description: 'Title of the WorkOrderslist',
  })
  created: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Last Updated',
    description: 'Title of the WorkOrderslist',
  })
  lastupdated: string;

  @Column()
  @ApiProperty({
    example: 'WorkOrderslist Actions',
    description: 'Title of the WorkOrderslist',
  })
  actions: string;
}
