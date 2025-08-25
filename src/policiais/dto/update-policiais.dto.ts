import { PartialType } from '@nestjs/mapped-types';
import { CreatePoliciaiDto } from './create-policiais.dto';

export class UpdatePoliciaiDto extends PartialType(CreatePoliciaiDto) {}
