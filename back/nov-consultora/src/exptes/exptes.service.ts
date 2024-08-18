import { Injectable } from '@nestjs/common';
import { Expte } from './entities/expte.entity';
import { ExpteRepository } from './expte.repository';


@Injectable()
export class ExptesService {
  constructor(private readonly expteRepository: ExpteRepository) {}
  create(createExpte: Expte) {
    try{
      this.expteRepository.save(createExpte);
      return "Expte created successfully";
    } catch (error){
      return error
    }
  }

  findAll() {
    return this.expteRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} expte`;
  }

  update(id: number, updateExpte: Expte) {
    return `This action updates a #${id} expte`;
  }

  remove(id: number) {
    return `This action removes a #${id} expte`;
  }
}
