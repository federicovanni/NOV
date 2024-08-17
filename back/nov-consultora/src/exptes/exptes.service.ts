import { Injectable } from '@nestjs/common';
import { CreateExpteDto } from './dto/create-expte.dto';
import { UpdateExpteDto } from './dto/update-expte.dto';

@Injectable()
export class ExptesService {
  create(createExpteDto: CreateExpteDto) {
    return 'This action adds a new expte';
  }

  findAll() {
    return `This action returns all exptes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expte`;
  }

  update(id: number, updateExpteDto: UpdateExpteDto) {
    return `This action updates a #${id} expte`;
  }

  remove(id: number) {
    return `This action removes a #${id} expte`;
  }
}
