import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users_role_list' })
export class Usersrolelist {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the usersrolelist todo',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'Users Role List Role',
    description: 'Title of the Users Role List',
  })
  role: string;

  @Column()
  @ApiProperty({
    example: 'Users Role List Actions',
    description: 'Title of the Users Role List',
  })
  actions: string;
}
