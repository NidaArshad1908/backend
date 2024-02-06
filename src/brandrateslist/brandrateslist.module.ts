import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandrateslistService } from './brandrateslist.service';
import { BrandrateslistController } from './brandrateslist.controller';
import { Brandrateslist } from './entities/brandrateslist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Brandrateslist])],
  controllers: [BrandrateslistController],
  providers: [BrandrateslistService],
  exports: [TypeOrmModule],
})
export class BrandrateslistModule {}
