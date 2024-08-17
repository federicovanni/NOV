import { PartialType } from '@nestjs/mapped-types';
import { CreateExpteDto } from './create-expte.dto';

export class UpdateExpteDto extends PartialType(CreateExpteDto) {}
