import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { WorkOrderslist } from './entities/work-orderslist.entity';

export class WorkOrderslistService {
  constructor(
    @InjectRepository(WorkOrderslist)
    private workOrderListRepository: Repository<WorkOrderslist>,
  ) {}

  findAll(): Promise<WorkOrderslist[]> {
    return this.workOrderListRepository.find();
  }

  findById(id: number): Promise<WorkOrderslist> {
    return this.workOrderListRepository.findOne({
      where: {
        id,
      },
    });
  }

  createOrUpdate(todo: WorkOrderslist): Promise<WorkOrderslist> {
    console.log(
      '🚀 ~ file: work-orderslist.service.ts:24 ~ WorkOrderslistService ~ create ~ todo',
      todo,
    );
    return this.workOrderListRepository.save(todo);
  }

  delete(ids: number[]): Promise<DeleteResult> {
    return this.workOrderListRepository.delete(ids);
  }
}
