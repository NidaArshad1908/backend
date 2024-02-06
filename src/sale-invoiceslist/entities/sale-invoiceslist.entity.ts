import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sale_invoices_list' })
export class SaleInvoiceslist {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the saleinvoiceslist todo',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'Sale Invoices List Template Date',
    description: 'Title of the Sale Invoices List',
  })
  date: string;

  @Column()
  @ApiProperty({
    example: 'Sale Invoices List Cloth Amount',
    description: 'Title of the Sale Invoices List',
  })
  clothamount: string;

  @Column()
  @ApiProperty({
    example: 'Sale Invoices List Rates',
    description: 'Title of the Sale Invoices List',
  })
  rates: string;

  @Column()
  @ApiProperty({
    example: 'Sale Invoices List Quantity',
    description: 'Title of the Sale Invoices List',
  })
  quantity: string;

  @Column()
  @ApiProperty({
    example: 'Sale Invoices List Button',
    description: 'Title of the Sale Invoices List',
  })
  button: string;

  @Column()
  @ApiProperty({
    example: 'Sale Invoices List Dry Clean',
    description: 'Title of the Sale Invoices List',
  })
  dryclean: string;

  @Column()
  @ApiProperty({
    example: 'Sale Invoices List Others',
    description: 'Title of the Sale Invoices List',
  })
  others: string;

  @Column()
  @ApiProperty({
    example: 'Sale Invoices List Advance',
    description: 'Title of the Sale Invoices List',
  })
  advance: string;

  @Column()
  @ApiProperty({
    example: 'Sale Invoices List Discount',
    description: 'Title of the Sale Invoices List',
  })
  discount: string;

  @Column()
  @ApiProperty({
    example: 'Sale Invoices List Total',
    description: 'Title of the Sale Invoices List',
  })
  total: string;

  @Column()
  @ApiProperty({
    example: 'Sale Invoices List Out Standing',
    description: 'Title of the Sale Invoices List',
  })
  outstanding: string;

  @Column()
  @ApiProperty({
    example: 'Sale Invoices List Actions',
    description: 'Title of the Sale Invoices List',
  })
  actions: string;
}
