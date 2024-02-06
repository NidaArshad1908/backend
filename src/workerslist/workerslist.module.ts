import { Module } from '@nestjs/common';
import { WorkerslistService } from './workerslist.service';
import { WorkerslistController } from './workerslist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workerslist } from './entities/workerslist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Workerslist])],
  controllers: [WorkerslistController],
  providers: [WorkerslistService],
})
export class WorkerslistModule {}
