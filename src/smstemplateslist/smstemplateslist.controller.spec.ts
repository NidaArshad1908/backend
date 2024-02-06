import { Test, TestingModule } from '@nestjs/testing';
import { SmstemplateslistController } from './smstemplateslist.controller';
import { SmstemplateslistService } from './smstemplateslist.service';

describe('SmstemplateslistController', () => {
  let controller: SmstemplateslistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmstemplateslistController],
      providers: [SmstemplateslistService],
    }).compile();

    controller = module.get<SmstemplateslistController>(SmstemplateslistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
