import { Test, TestingModule } from '@nestjs/testing';
import { ExptesController } from './exptes.controller';
import { ExptesService } from './exptes.service';

describe('ExptesController', () => {
  let controller: ExptesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExptesController],
      providers: [ExptesService],
    }).compile();

    controller = module.get<ExptesController>(ExptesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
