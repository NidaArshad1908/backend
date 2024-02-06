import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UsersList } from './entities/users-list.entity';

export class UsersListService {
  constructor(
    @InjectRepository(UsersList)
    private usersListRepository: Repository<UsersList>,
  ) {}

  findAll(): Promise<UsersList[]> {
    return this.usersListRepository.find();
  }

  findById(id: number): Promise<UsersList> {
    return this.usersListRepository.findOne({
      where: {
        id,
      },
    });
  }

  createOrUpdate(todo: UsersList): Promise<UsersList> {
    console.log(
      '🚀 ~ file: users-list.service.ts:24 ~ UsersListService ~ create ~ todo',
      todo,
    );
    return this.usersListRepository.save(todo);
  }

  delete(ids: number[]): Promise<DeleteResult> {
    return this.usersListRepository.delete(ids);
  }
}
