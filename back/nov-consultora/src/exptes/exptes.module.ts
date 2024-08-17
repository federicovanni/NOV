import { Module } from '@nestjs/common';
import { ExptesService } from './exptes.service';
import { ExptesController } from './exptes.controller';

@Module({
  controllers: [ExptesController],
  providers: [ExptesService],
})
export class ExptesModule {}
