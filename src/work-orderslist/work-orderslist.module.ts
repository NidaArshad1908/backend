import { Module } from '@nestjs/common';
import { WorkOrderslistService } from './work-orderslist.service';
import { WorkOrderslistController } from './work-orderslist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkOrderslist } from './entities/work-orderslist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkOrderslist])],
  controllers: [WorkOrderslistController],
  providers: [WorkOrderslistService],
})
export class WorkOrderslistModule {}
