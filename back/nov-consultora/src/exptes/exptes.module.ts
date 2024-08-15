import { Module } from '@nestjs/common';
import { ExptesService } from './exptes.service';
import { ExptesController } from './exptes.controller';
@Module({
    providers: [ExptesService],
    controllers: [ExptesController],
})
export class ExptesModule {}