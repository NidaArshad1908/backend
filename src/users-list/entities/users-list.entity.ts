import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users_list' })
export class UsersList {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the userslist todo',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'Users List Username',
    description: 'Title of the Users List',
  })
  username: string;

  @Column()
  @ApiProperty({
    example: 'Users List Email',
    description: 'Title of the Users List',
  })
  email: string;

  @Column()
  @ApiProperty({
    example: 'Users List Created',
    description: 'Title of the Users List',
  })
  created: string;

  @Column()
  @ApiProperty({
    example: 'Users List LastUpdate',
    description: 'Title of the Users List',
  })
  lastupdated: string;

  @Column()
  @ApiProperty({
    example: 'Users List Role',
    description: 'Title of the Users List',
  })
  role: string;

  @Column()
  @ApiProperty({
    example: 'Users List Status',
    description: 'Title of the Users List',
  })
  status: string;

  @Column()
  @ApiProperty({
    example: 'Users List Actions',
    description: 'Title of the Users List',
  })
  actions: string;
}
