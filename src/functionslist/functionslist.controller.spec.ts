import { Test, TestingModule } from '@nestjs/testing';
import { FunctionslistController } from './functionslist.controller';
import { FunctionslistService } from './functionslist.service';

describe('FunctionslistController', () => {
  let controller: FunctionslistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FunctionslistController],
      providers: [FunctionslistService],
    }).compile();

    controller = module.get<FunctionslistController>(FunctionslistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
