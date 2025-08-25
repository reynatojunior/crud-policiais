import { Module } from '@nestjs/common';
import { PoliciaisService } from './policiais.service';
import { PoliciaisController } from './policiais.controller';

@Module({
  controllers: [PoliciaisController],
  providers: [PoliciaisService],
})
export class PoliciaisModule {}
