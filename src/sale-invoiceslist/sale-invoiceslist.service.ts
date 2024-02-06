import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { SaleInvoiceslist } from './entities/sale-invoiceslist.entity';

export class SaleInvoiceslistService {
  constructor(
    @InjectRepository(SaleInvoiceslist)
    private saleInvoicesListRepository: Repository<SaleInvoiceslist>,
  ) {}

  findAll(): Promise<SaleInvoiceslist[]> {
    return this.saleInvoicesListRepository.find();
  }

  findById(id: number): Promise<SaleInvoiceslist> {
    return this.saleInvoicesListRepository.findOne({
      where: {
        id,
      },
    });
  }

  createOrUpdate(todo: SaleInvoiceslist): Promise<SaleInvoiceslist> {
    console.log(
      '🚀 ~ file: sale-invoiceslist.service.ts:24 ~ SaleInvoiceslistService ~ create ~ todo',
      todo,
    );
    return this.saleInvoicesListRepository.save(todo);
  }

  delete(ids: number[]): Promise<DeleteResult> {
    return this.saleInvoicesListRepository.delete(ids);
  }
}
