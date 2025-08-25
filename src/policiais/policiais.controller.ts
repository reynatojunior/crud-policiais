import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PoliciaisService } from './policiais.service';
import { CreatePoliciaiDto } from './dto/create-policiais.dto';
import { UpdatePoliciaiDto } from './dto/update-policiais.dto';

@Controller('policiais')
export class PoliciaisController {
  constructor(private readonly policiaisService: PoliciaisService) {}

  @Post()
  create(@Body() createPoliciaiDto: CreatePoliciaiDto) {
    return this.policiaisService.create(createPoliciaiDto);
  }

  @Get()
  findAll() {
    return this.policiaisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.policiaisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePoliciaiDto: UpdatePoliciaiDto) {
    return this.policiaisService.update(+id, updatePoliciaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.policiaisService.remove(+id);
  }
}
