import { Test, TestingModule } from '@nestjs/testing';
import { WorkOrderslistController } from './work-orderslist.controller';
import { WorkOrderslistService } from './work-orderslist.service';

describe('WorkOrderslistController', () => {
  let controller: WorkOrderslistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkOrderslistController],
      providers: [WorkOrderslistService],
    }).compile();

    controller = module.get<WorkOrderslistController>(WorkOrderslistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
