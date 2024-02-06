import { Test, TestingModule } from '@nestjs/testing';
import { UsersrolelistController } from './usersrolelist.controller';
import { UsersrolelistService } from './usersrolelist.service';

describe('UsersrolelistController', () => {
  let controller: UsersrolelistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersrolelistController],
      providers: [UsersrolelistService],
    }).compile();

    controller = module.get<UsersrolelistController>(UsersrolelistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
