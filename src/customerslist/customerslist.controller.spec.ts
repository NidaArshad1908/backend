import { Test, TestingModule } from '@nestjs/testing';
import { CustomerslistController } from './customerslist.controller';
import { CustomerslistService } from './customerslist.service';

describe('CustomerslistController', () => {
  let controller: CustomerslistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerslistController],
      providers: [CustomerslistService],
    }).compile();

    controller = module.get<CustomerslistController>(CustomerslistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
