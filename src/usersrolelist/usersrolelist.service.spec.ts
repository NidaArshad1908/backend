import { Test, TestingModule } from '@nestjs/testing';
import { UsersrolelistService } from './usersrolelist.service';

describe('UsersrolelistService', () => {
  let service: UsersrolelistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersrolelistService],
    }).compile();

    service = module.get<UsersrolelistService>(UsersrolelistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
