import { Test, TestingModule } from '@nestjs/testing';
import { TotalSaleslistController } from './total-saleslist.controller';
import { TotalSaleslistService } from './total-saleslist.service';

describe('TotalSaleslistController', () => {
  let controller: TotalSaleslistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TotalSaleslistController],
      providers: [TotalSaleslistService],
    }).compile();

    controller = module.get<TotalSaleslistController>(TotalSaleslistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
