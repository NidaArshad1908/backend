import { Test, TestingModule } from '@nestjs/testing';
import { CountrieslistController } from './countrieslist.controller';
import { CountrieslistService } from './countrieslist.service';

describe('CountrieslistController', () => {
  let controller: CountrieslistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountrieslistController],
      providers: [CountrieslistService],
    }).compile();

    controller = module.get<CountrieslistController>(CountrieslistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
