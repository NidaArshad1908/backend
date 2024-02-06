import { Test, TestingModule } from '@nestjs/testing';
import { WorkerslistService } from './workerslist.service';

describe('WorkerslistService', () => {
  let service: WorkerslistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkerslistService],
    }).compile();

    service = module.get<WorkerslistService>(WorkerslistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
