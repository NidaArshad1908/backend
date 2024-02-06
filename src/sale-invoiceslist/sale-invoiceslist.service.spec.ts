import { Test, TestingModule } from '@nestjs/testing';
import { SaleInvoiceslistService } from './sale-invoiceslist.service';

describe('SaleInvoiceslistService', () => {
  let service: SaleInvoiceslistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleInvoiceslistService],
    }).compile();

    service = module.get<SaleInvoiceslistService>(SaleInvoiceslistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
