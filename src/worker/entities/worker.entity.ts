import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'worker' })
export class Worker {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the Worker todo',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'Worker Name',
    description: 'Title of the Worker',
  })
  name: string;

  @Column()
  @ApiProperty({
    example: 'Worker Kameez',
    description: 'Title of the Worker',
  })
  kameez: string;

  @Column()
  @ApiProperty({
    example: 'Worker Shalwar Kameez',
    description: 'Title of the Worker',
  })
  shalwarkameez: string;

  @Column()
  @ApiProperty({
    example: 'Worker Received',
    description: 'Title of the Worker',
  })
  received: string;
}
