import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { TotalSaleslist } from './entities/total-saleslist.entity';

export class TotalSaleslistService {
  constructor(
    @InjectRepository(TotalSaleslist)
    private totalSalesListRepository: Repository<TotalSaleslist>,
  ) {}

  findAll(): Promise<TotalSaleslist[]> {
    return this.totalSalesListRepository.find();
  }

  findById(id: number): Promise<TotalSaleslist> {
    return this.totalSalesListRepository.findOne({
      where: {
        id,
      },
    });
  }

  createOrUpdate(todo: TotalSaleslist): Promise<TotalSaleslist> {
    console.log(
      '🚀 ~ file: total-saleslist.service.ts:24 ~ TotalSaleslistService ~ create ~ todo',
      todo,
    );
    return this.totalSalesListRepository.save(todo);
  }

  delete(ids: number[]): Promise<DeleteResult> {
    return this.totalSalesListRepository.delete(ids);
  }
}
