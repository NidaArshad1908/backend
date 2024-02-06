import { Test, TestingModule } from '@nestjs/testing';
import { SmstemplateslistService } from './smstemplateslist.service';

describe('SmstemplateslistService', () => {
  let service: SmstemplateslistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmstemplateslistService],
    }).compile();

    service = module.get<SmstemplateslistService>(SmstemplateslistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
