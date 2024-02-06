import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersrolelistController } from './usersrolelist.controller';
import { UsersrolelistService } from './usersrolelist.service';
import { Usersrolelist } from './entities/usersrolelist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usersrolelist])],
  controllers: [UsersrolelistController],
  providers: [UsersrolelistService],
  exports: [TypeOrmModule],
})
export class UsersrolelistModule {}
