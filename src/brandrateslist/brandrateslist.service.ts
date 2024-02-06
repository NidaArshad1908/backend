import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Brandrateslist } from './entities/brandrateslist.entity';

export class BrandrateslistService {
  constructor(
    @InjectRepository(Brandrateslist)
    private brandratesListRepository: Repository<Brandrateslist>,
  ) {}

  findAll(): Promise<Brandrateslist[]> {
    return this.brandratesListRepository.find();
  }

  findById(id: number): Promise<Brandrateslist> {
    return this.brandratesListRepository.findOne({
      where: {
        id,
      },
    });
  }

  createOrUpdate(todo: Brandrateslist): Promise<Brandrateslist> {
    console.log(
      '🚀 ~ file: brandrateslist.service.ts:24 ~ BrandrateslistService ~ create ~ todo',
      todo,
    );
    return this.brandratesListRepository.save(todo);
  }

  delete(ids: number[]): Promise<DeleteResult> {
    return this.brandratesListRepository.delete(ids);
  }
}
