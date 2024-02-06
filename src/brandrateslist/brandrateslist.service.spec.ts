import { Test, TestingModule } from '@nestjs/testing';
import { BrandrateslistService } from './brandrateslist.service';

describe('BrandrateslistService', () => {
  let service: BrandrateslistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrandrateslistService],
    }).compile();

    service = module.get<BrandrateslistService>(BrandrateslistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
