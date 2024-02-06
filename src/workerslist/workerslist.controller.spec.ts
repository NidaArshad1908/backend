import { Test, TestingModule } from '@nestjs/testing';
import { WorkerslistController } from './workerslist.controller';
import { WorkerslistService } from './workerslist.service';

describe('WorkerslistController', () => {
  let controller: WorkerslistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkerslistController],
      providers: [WorkerslistService],
    }).compile();

    controller = module.get<WorkerslistController>(WorkerslistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
