import { Test, TestingModule } from '@nestjs/testing';
import { TotalSaleslistService } from './total-saleslist.service';

describe('TotalSaleslistService', () => {
  let service: TotalSaleslistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TotalSaleslistService],
    }).compile();

    service = module.get<TotalSaleslistService>(TotalSaleslistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
