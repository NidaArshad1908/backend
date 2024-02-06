import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Workerslist } from './entities/workerslist.entity';

export class WorkerslistService {
  constructor(
    @InjectRepository(Workerslist)
    private workersListRepository: Repository<Workerslist>,
  ) {}

  findAll(): Promise<Workerslist[]> {
    return this.workersListRepository.find();
  }

  findById(id: number): Promise<Workerslist> {
    return this.workersListRepository.findOne({
      where: {
        id,
      },
    });
  }

  createOrUpdate(todo: Workerslist): Promise<Workerslist> {
    console.log(
      '🚀 ~ file: workerslist.service.ts:24 ~ WorkerslistService ~ create ~ todo',
      todo,
    );
    return this.workersListRepository.save(todo);
  }

  delete(ids: number[]): Promise<DeleteResult> {
    return this.workersListRepository.delete(ids);
  }
}
