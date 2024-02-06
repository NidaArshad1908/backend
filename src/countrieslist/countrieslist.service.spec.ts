import { Test, TestingModule } from '@nestjs/testing';
import { CountrieslistService } from './countrieslist.service';

describe('CountrieslistService', () => {
  let service: CountrieslistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountrieslistService],
    }).compile();

    service = module.get<CountrieslistService>(CountrieslistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
