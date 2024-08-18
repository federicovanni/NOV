import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExptesService } from './exptes.service';
import { Expte } from './entities/expte.entity';


@Controller('exptes')
export class ExptesController {
  constructor(private readonly exptesService: ExptesService) {}

  @Post()
  create(@Body() createExpte: Expte) {
    return this.exptesService.create(createExpte);
  }

  @Get()
  findAll() {
    return this.exptesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exptesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExpte: Expte) {
    return this.exptesService.update(+id, updateExpte);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exptesService.remove(+id);
  }
}
