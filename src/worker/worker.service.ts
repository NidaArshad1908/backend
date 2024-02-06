import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Worker } from './entities/worker.entity';

export class WorkerService {
  constructor(
    @InjectRepository(Worker)
    private workerRepository: Repository<Worker>,
  ) {}

  findAll(): Promise<Worker[]> {
    return this.workerRepository.find();
  }

  findById(id: number): Promise<Worker> {
    return this.workerRepository.findOne({
      where: {
        id,
      },
    });
  }

  createOrUpdate(todo: Worker): Promise<Worker> {
    console.log(
      '🚀 ~ file: worker.service.ts:24 ~ WorkerService ~ create ~ todo',
      todo,
    );
    return this.workerRepository.save(todo);
  }

  delete(ids: number[]): Promise<DeleteResult> {
    return this.workerRepository.delete(ids);
  }
}
