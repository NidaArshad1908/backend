import { Test, TestingModule } from '@nestjs/testing';
import { OrderslistController } from './orderslist.controller';
import { OrderslistService } from './orderslist.service';

describe('OrderslistController', () => {
  let controller: OrderslistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderslistController],
      providers: [OrderslistService],
    }).compile();

    controller = module.get<OrderslistController>(OrderslistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
