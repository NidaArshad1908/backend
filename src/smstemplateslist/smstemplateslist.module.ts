import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Smstemplateslist } from './entities/smstemplateslist.entity';
import { SmstemplateslistController } from './smstemplateslist.controller';
import { SmstemplateslistService } from './smstemplateslist.service';

@Module({
  imports: [TypeOrmModule.forFeature([Smstemplateslist])],
  controllers: [SmstemplateslistController],
  providers: [SmstemplateslistService],
  exports: [TypeOrmModule],
})
export class SmstemplateslistModule {}
