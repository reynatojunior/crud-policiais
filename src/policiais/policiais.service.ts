import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePoliciaiDto } from './dto/create-policiais.dto';
import { UpdatePoliciaiDto } from './dto/update-policiais.dto';
import { Policiais } from './entities/policiais.entity';

@Injectable()
export class PoliciaisService {
  constructor(
    @InjectRepository(Policiais)
    private readonly repository: Repository<Policiais>,
  ) {}

  create(createPoliciaiDto: CreatePoliciaiDto) {
    const policial = this.repository.create(createPoliciaiDto);
    return this.repository.save(policial);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  async update(id: number, updatePoliciaiDto: UpdatePoliciaiDto) {
    await this.repository.update(id, updatePoliciaiDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}