import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'orders_list' })
export class Orderslist {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the orderslist todo',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'Order List Template Size',
    description: 'Title of the Order List',
  })
  size: string;

  @Column()
  @ApiProperty({
    example: 'Order List Order Date',
    description: 'Title of the Order List',
  })
  orderdate: string;

  @Column()
  @ApiProperty({
    example: 'Order List Return Date',
    description: 'Title of the Order List',
  })
  returndate: string;

  @Column()
  @ApiProperty({
    example: 'Order List Cloth Rate',
    description: 'Title of the Order List',
  })
  clothrate: string;

  @Column()
  @ApiProperty({
    example: 'Order List Rates',
    description: 'Title of the Order List',
  })
  rates: string;

  @Column()
  @ApiProperty({
    example: 'Order List Last Updated',
    description: 'Title of the Order List',
  })
  quality: string;

  @Column()
  @ApiProperty({
    example: 'Order List Total',
    description: 'Title of the Order List',
  })
  total: string;

  @Column()
  @ApiProperty({
    example: 'Order List Out Standing',
    description: 'Title of the Order List',
  })
  outstanding: string;

  @Column()
  @ApiProperty({
    example: 'Order List Amount',
    description: 'Title of the Order List',
  })
  amount: string;

  @Column()
  @ApiProperty({
    example: 'Order List Dues',
    description: 'Title of the Order List',
  })
  dues: string;

  @Column()
  @ApiProperty({
    example: 'Order List Last Status',
    description: 'Title of the Order List',
  })
  status: string;

  @Column()
  @ApiProperty({
    example: 'Order List Actions',
    description: 'Title of the Order List',
  })
  actions: string;

  @Column()
  @ApiProperty({
    example: 'Order List Button',
    description: 'Title of the Order List',
  })
  button: string;

  @Column()
  @ApiProperty({
    example: 'Order List Dry Clean',
    description: 'Title of the Order List',
  })
  dryclean: string;

  @Column()
  @ApiProperty({
    example: 'Order List Others',
    description: 'Title of the Order List',
  })
  others: string;

  @Column()
  @ApiProperty({
    example: 'Order List Advance',
    description: 'Title of the Order List',
  })
  advance: string;

  @Column()
  @ApiProperty({
    example: 'Order List Discount',
    description: 'Title of the Order List',
  })
  discount: string;
}
