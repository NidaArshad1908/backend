import { Module } from '@nestjs/common';
import { OrderslistService } from './orderslist.service';
import { OrderslistController } from './orderslist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orderslist } from './entities/orderslist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Orderslist])],
  controllers: [OrderslistController],
  providers: [OrderslistService],
})
export class OrderslistModule {}
