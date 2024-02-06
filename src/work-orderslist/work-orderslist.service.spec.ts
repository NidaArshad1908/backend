import { Test, TestingModule } from '@nestjs/testing';
import { WorkOrderslistService } from './work-orderslist.service';

describe('WorkOrderslistService', () => {
  let service: WorkOrderslistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkOrderslistService],
    }).compile();

    service = module.get<WorkOrderslistService>(WorkOrderslistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
