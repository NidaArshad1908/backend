import { Test, TestingModule } from '@nestjs/testing';
import { BrandrateslistController } from './brandrateslist.controller';
import { BrandrateslistService } from './brandrateslist.service';

describe('BrandrateslistController', () => {
  let controller: BrandrateslistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrandrateslistController],
      providers: [BrandrateslistService],
    }).compile();

    controller = module.get<BrandrateslistController>(BrandrateslistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
