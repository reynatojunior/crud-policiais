import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PoliciaisModule } from './policiais/policiais.module';

@Module({
  imports: [PoliciaisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
