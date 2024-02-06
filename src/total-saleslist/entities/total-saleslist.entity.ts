import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'total_sales_list' })
export class TotalSaleslist {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the totalsaleslist todo',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'Total Sales List Template Date',
    description: 'Title of the Total Sales List',
  })
  date: string;

  @Column()
  @ApiProperty({
    example: 'Total Sales List Cloth Amount',
    description: 'Title of the Total Sales List',
  })
  clothamount: string;

  @Column()
  @ApiProperty({
    example: 'Total Sales List Rates',
    description: 'Title of the Total Sales List',
  })
  rates: string;

  @Column()
  @ApiProperty({
    example: 'Total Sales List Quantity',
    description: 'Title of the Total Sales List',
  })
  quantity: string;

  @Column()
  @ApiProperty({
    example: 'Total Sales List Button',
    description: 'Title of the Total Sales List',
  })
  button: string;

  @Column()
  @ApiProperty({
    example: 'Total Sales List Dry Clean',
    description: 'Title of the Total Sales List',
  })
  dryclean: string;

  @Column()
  @ApiProperty({
    example: 'Total Sales List Others',
    description: 'Title of the Total Sales List',
  })
  others: string;

  @Column()
  @ApiProperty({
    example: 'Total Sales List Advance',
    description: 'Title of the Total Sales List',
  })
  advance: string;

  @Column()
  @ApiProperty({
    example: 'Total Sales List Discount',
    description: 'Title of the Total Sales List',
  })
  discount: string;

  @Column()
  @ApiProperty({
    example: 'Total Sales List Total',
    description: 'Title of the Total Sales List',
  })
  total: string;

  @Column()
  @ApiProperty({
    example: 'Total Sales List Out Standing',
    description: 'Title of the Total Sales List',
  })
  outstanding: string;
}
