import { Module } from '@nestjs/common';
import { TotalSaleslistService } from './total-saleslist.service';
import { TotalSaleslistController } from './total-saleslist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TotalSaleslist } from './entities/total-saleslist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TotalSaleslist])],
  controllers: [TotalSaleslistController],
  providers: [TotalSaleslistService],
})
export class TotalSaleslistModule {}
