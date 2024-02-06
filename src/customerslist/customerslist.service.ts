import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Customerslist } from './entities/customerslist.entity';

export class CustomerslistService {
  constructor(
    @InjectRepository(Customerslist)
    private customersListRepository: Repository<Customerslist>,
  ) {}

  findAll(): Promise<Customerslist[]> {
    return this.customersListRepository.find();
  }

  findById(id: number): Promise<Customerslist> {
    return this.customersListRepository.findOne({
      where: {
        id,
      },
    });
  }

  createOrUpdate(todo: Customerslist): Promise<Customerslist> {
    console.log(
      '🚀 ~ file: customerslist.service.ts:24 ~ CustomerslistService ~ create ~ todo',
      todo,
    );
    return this.customersListRepository.save(todo);
  }

  delete(ids: number[]): Promise<DeleteResult> {
    return this.customersListRepository.delete(ids);
  }
}
