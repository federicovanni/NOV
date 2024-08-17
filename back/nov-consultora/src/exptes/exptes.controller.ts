import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExptesService } from './exptes.service';
import { CreateExpteDto } from './dto/create-expte.dto';
import { UpdateExpteDto } from './dto/update-expte.dto';

@Controller('exptes')
export class ExptesController {
  constructor(private readonly exptesService: ExptesService) {}

  @Post()
  create(@Body() createExpteDto: CreateExpteDto) {
    return this.exptesService.create(createExpteDto);
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
  update(@Param('id') id: string, @Body() updateExpteDto: UpdateExpteDto) {
    return this.exptesService.update(+id, updateExpteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exptesService.remove(+id);
  }
}
