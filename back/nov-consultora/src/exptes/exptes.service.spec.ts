import { Test, TestingModule } from '@nestjs/testing';
import { ExptesService } from './exptes.service';

describe('ExptesService', () => {
  let service: ExptesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExptesService],
    }).compile();

    service = module.get<ExptesService>(ExptesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
