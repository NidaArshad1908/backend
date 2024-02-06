import { Test, TestingModule } from '@nestjs/testing';
import { SaleInvoiceslistController } from './sale-invoiceslist.controller';
import { SaleInvoiceslistService } from './sale-invoiceslist.service';

describe('SaleInvoiceslistController', () => {
  let controller: SaleInvoiceslistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaleInvoiceslistController],
      providers: [SaleInvoiceslistService],
    }).compile();

    controller = module.get<SaleInvoiceslistController>(SaleInvoiceslistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
