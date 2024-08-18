import { Module } from '@nestjs/common';
import { ExptesService } from './exptes.service';
import { ExptesController } from './exptes.controller';
import { ExpteRepository } from './expte.repository';

@Module({
  controllers: [ExptesController],
  providers: [ExptesService, ExpteRepository],
})
export class ExptesModule {}
