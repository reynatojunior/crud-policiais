import { Module } from '@nestjs/common';
import { PoliciaisService } from './policiais.service';
import { PoliciaisController } from './policiais.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Policiais } from './entities/policiais.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Policiais])],
  controllers: [PoliciaisController],
  providers: [PoliciaisService],
})
export class PoliciaisModule {}
