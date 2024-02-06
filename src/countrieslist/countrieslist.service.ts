import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Countrieslist } from './entities/countrieslist.entity';

export class CountrieslistService {
  constructor(
    @InjectRepository(Countrieslist)
    private countriesListRepository: Repository<Countrieslist>,
  ) {}

  findAll(): Promise<Countrieslist[]> {
    return this.countriesListRepository.find();
  }

  findById(id: number): Promise<Countrieslist> {
    return this.countriesListRepository.findOne({
      where: {
        id,
      },
    });
  }

  createOrUpdate(todo: Countrieslist): Promise<Countrieslist> {
    console.log(
      '🚀 ~ file: countrieslist.service.ts:24 ~ CountrieslistService ~ create ~ todo',
      todo,
    );
    return this.countriesListRepository.save(todo);
  }

  delete(ids: number[]): Promise<DeleteResult> {
    return this.countriesListRepository.delete(ids);
  }
}
