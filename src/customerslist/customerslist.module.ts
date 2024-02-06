import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customerslist } from './entities/customerslist.entity';
import { CustomerslistController } from './customerslist.controller';
import { CustomerslistService } from './customerslist.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customerslist])],
  controllers: [CustomerslistController],
  providers: [CustomerslistService],
  exports: [TypeOrmModule],
})
export class CustomerslistModule {}
