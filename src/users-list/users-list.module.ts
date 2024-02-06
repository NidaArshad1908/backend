import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersListController } from './users-list.controller';
import { UsersListService } from './users-list.service';
import { UsersList } from './entities/users-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersList])],
  controllers: [UsersListController],
  providers: [UsersListService],
  exports: [TypeOrmModule],
})
export class UsersListModule {}
