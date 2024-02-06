import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Functionslist } from './entities/functionslist.entity';
import { FunctionslistController } from './functionslist.controller';
import { FunctionslistService } from './functionslist.service';

@Module({
  imports: [TypeOrmModule.forFeature([Functionslist])],
  controllers: [FunctionslistController],
  providers: [FunctionslistService],
  exports: [TypeOrmModule],
})
export class FunctionslistModule {}
