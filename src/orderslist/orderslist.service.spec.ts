import { Test, TestingModule } from '@nestjs/testing';
import { OrderslistService } from './orderslist.service';

describe('OrderslistService', () => {
  let service: OrderslistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderslistService],
    }).compile();

    service = module.get<OrderslistService>(OrderslistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
