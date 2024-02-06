import { Test, TestingModule } from '@nestjs/testing';
import { FunctionslistService } from './functionslist.service';

describe('FunctionslistService', () => {
  let service: FunctionslistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FunctionslistService],
    }).compile();

    service = module.get<FunctionslistService>(FunctionslistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
