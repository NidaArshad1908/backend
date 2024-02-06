import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Countrieslist } from './entities/countrieslist.entity';
import { CountrieslistController } from './countrieslist.controller';
import { CountrieslistService } from './countrieslist.service';

@Module({
  imports: [TypeOrmModule.forFeature([Countrieslist])],
  controllers: [CountrieslistController],
  providers: [CountrieslistService],
  exports: [TypeOrmModule],
})
export class CountrieslistModule {}
