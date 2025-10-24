import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { RickAndMortyService } from './rick-and-morty.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { CreateCharacterDto } from './dto/create-character.dto';

@Controller('rick-and-morty')
export class RickAndMortyController {
  constructor(private readonly rickAndMortyService: RickAndMortyService) {}

  @Get("GetAllCharacters")
  findAll(@Query() paginationDto: PaginationDto) {
    return this.rickAndMortyService.findAll(paginationDto);
  }

  @Get(":id")
  findOne(@Param('id') id:number) {
    return this.rickAndMortyService.findOne(id)
  }

  @Post()
  create(@Body() dto: CreateCharacterDto) {
    return this.rickAndMortyService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateCharacterDto) {
    return this.rickAndMortyService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.rickAndMortyService.remove(id);
  }
}
