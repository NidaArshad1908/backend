import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Smstemplateslist } from './entities/smstemplateslist.entity';

export class SmstemplateslistService {
  constructor(
    @InjectRepository(Smstemplateslist)
    private smstemplatesListRepository: Repository<Smstemplateslist>,
  ) {}

  findAll(): Promise<Smstemplateslist[]> {
    return this.smstemplatesListRepository.find();
  }

  findById(id: number): Promise<Smstemplateslist> {
    return this.smstemplatesListRepository.findOne({
      where: {
        id,
      },
    });
  }

  createOrUpdate(todo: Smstemplateslist): Promise<Smstemplateslist> {
    console.log(
      '🚀 ~ file: smstemplateslist.service.ts:24 ~ SmstemplateslistService ~ create ~ todo',
      todo,
    );
    return this.smstemplatesListRepository.save(todo);
  }

  delete(ids: number[]): Promise<DeleteResult> {
    return this.smstemplatesListRepository.delete(ids);
  }
}
