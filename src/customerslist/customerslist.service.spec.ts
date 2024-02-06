import { Test, TestingModule } from '@nestjs/testing';
import { CustomerslistService } from './customerslist.service';

describe('CustomerslistService', () => {
  let service: CustomerslistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerslistService],
    }).compile();

    service = module.get<CustomerslistService>(CustomerslistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
