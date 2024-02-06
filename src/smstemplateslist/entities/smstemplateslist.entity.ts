import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sms_templates_list' })
export class Smstemplateslist {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the smstemplateslist todo',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'Sms Templates List Template Name',
    description: 'Title of the Sms Templates List',
  })
  name: string;

  @Column()
  @ApiProperty({
    example: 'Sms Templates List Template',
    description: 'Title of the Sms Templates List',
  })
  template: string;

  @Column()
  @ApiProperty({
    example: 'Sms Templates List Added By',
    description: 'Title of the Sms Templates List',
  })
  addedby: string;

  @Column()
  @ApiProperty({
    example: 'Sms Templates List Modified By',
    description: 'Title of the Sms Templates List',
  })
  modifiedby: string;

  @Column()
  @ApiProperty({
    example: 'Sms Templates List Created',
    description: 'Title of the Sms Templates List',
  })
  created: string;

  @Column()
  @ApiProperty({
    example: 'Sms Templates List Last Updated',
    description: 'Title of the Sms Templates List',
  })
  lastupdated: string;

  @Column()
  @ApiProperty({
    example: 'Sms Templates List Actions',
    description: 'Title of the Sms Templates List',
  })
  actions: string;
}
