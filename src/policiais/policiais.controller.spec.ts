import { Test, TestingModule } from '@nestjs/testing';
import { PoliciaisController } from './policiais.controller';
import { PoliciaisService } from './policiais.service';

describe('PoliciaisController', () => {
  let controller: PoliciaisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoliciaisController],
      providers: [PoliciaisService],
    }).compile();

    controller = module.get<PoliciaisController>(PoliciaisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
