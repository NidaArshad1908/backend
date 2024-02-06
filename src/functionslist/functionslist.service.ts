import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Functionslist } from './entities/functionslist.entity';

export class FunctionslistService {
  constructor(
    @InjectRepository(Functionslist)
    private functionsListRepository: Repository<Functionslist>,
  ) {}

  findAll(): Promise<Functionslist[]> {
    return this.functionsListRepository.find();
  }

  findById(id: number): Promise<Functionslist> {
    return this.functionsListRepository.findOne({
      where: {
        id,
      },
    });
  }

  createOrUpdate(todo: Functionslist): Promise<Functionslist> {
    console.log(
      '🚀 ~ file: functionslist.service.ts:24 ~ FunctionslistService ~ create ~ todo',
      todo,
    );
    return this.functionsListRepository.save(todo);
  }

  delete(ids: number[]): Promise<DeleteResult> {
    return this.functionsListRepository.delete(ids);
  }
}
