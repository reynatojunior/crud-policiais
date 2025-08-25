import { Injectable } from '@nestjs/common';
import { CreatePoliciaiDto } from './dto/create-policiais.dto';
import { UpdatePoliciaiDto } from './dto/update-policiais.dto';

@Injectable()
export class PoliciaisService {
  create(createPoliciaiDto: CreatePoliciaiDto) {
    return 'This action adds a new policiai';
  }

  findAll() {
    return `This action returns all policiais`;
  }

  findOne(id: number) {
    return `This action returns a #${id} policiai`;
  }

  update(id: number, updatePoliciaiDto: UpdatePoliciaiDto) {
    return `This action updates a #${id} policiai`;
  }

  remove(id: number) {
    return `This action removes a #${id} policiai`;
  }
}
