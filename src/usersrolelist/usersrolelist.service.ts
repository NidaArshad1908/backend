import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Usersrolelist } from './entities/usersrolelist.entity';

export class UsersrolelistService {
  constructor(
    @InjectRepository(Usersrolelist)
    private usersRoleListRepository: Repository<Usersrolelist>,
  ) {}

  findAll(): Promise<Usersrolelist[]> {
    return this.usersRoleListRepository.find();
  }

  findById(id: number): Promise<Usersrolelist> {
    return this.usersRoleListRepository.findOne({
      where: {
        id,
      },
    });
  }

  createOrUpdate(todo: Usersrolelist): Promise<Usersrolelist> {
    console.log(
      '🚀 ~ file: usersrolelist.service.ts:24 ~ UsersrolelistService ~ create ~ todo',
      todo,
    );
    return this.usersRoleListRepository.save(todo);
  }

  delete(ids: number[]): Promise<DeleteResult> {
    return this.usersRoleListRepository.delete(ids);
  }
}
