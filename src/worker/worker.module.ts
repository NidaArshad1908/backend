import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Worker } from './entities/worker.entity';
import { WorkerService } from './worker.service';
import { WorkerController } from './worker.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Worker])],
  controllers: [WorkerController],
  providers: [WorkerService],
  exports: [TypeOrmModule],
})
export class WorkerModule {}
