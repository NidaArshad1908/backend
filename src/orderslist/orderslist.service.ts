import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Orderslist } from './entities/orderslist.entity';

export class OrderslistService {
  constructor(
    @InjectRepository(Orderslist)
    private ordersListRepository: Repository<Orderslist>,
  ) {}

  findAll(): Promise<Orderslist[]> {
    return this.ordersListRepository.find();
  }

  findById(id: number): Promise<Orderslist> {
    return this.ordersListRepository.findOne({
      where: {
        id,
      },
    });
  }

  createOrUpdate(todo: Orderslist): Promise<Orderslist> {
    console.log(
      '🚀 ~ file: orderslist.service.ts:24 ~ OrderslistService ~ create ~ todo',
      todo,
    );
    return this.ordersListRepository.save(todo);
  }

  delete(ids: number[]): Promise<DeleteResult> {
    return this.ordersListRepository.delete(ids);
  }
}
