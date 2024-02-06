import { Module } from '@nestjs/common';
import { SaleInvoiceslistService } from './sale-invoiceslist.service';
import { SaleInvoiceslistController } from './sale-invoiceslist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleInvoiceslist } from './entities/sale-invoiceslist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleInvoiceslist])],
  controllers: [SaleInvoiceslistController],
  providers: [SaleInvoiceslistService],
})
export class SaleInvoiceslistModule {}
