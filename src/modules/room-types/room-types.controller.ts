import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoomsTypeService } from './rooms-types.service';
import { CreateRoomTypesDto } from './dto/create-room-types.dto';
import { UpdateRoomTypesDto } from './dto/update-room-types.dto';

@Controller('rooms-types')
export class RoomsTypesController {
  constructor(private readonly roomTypesService: RoomsTypeService) {}

  @Post()
  create(@Body() createRoomTypesDto: CreateRoomTypesDto) {
    return this.roomTypesService.create(createRoomTypesDto);
  }

  @Get()
  findAll() {
    return this.roomTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomTypesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRoomTypesDto: UpdateRoomTypesDto,
  ) {
    return this.roomTypesService.update(+id, updateRoomTypesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomTypesService.remove(+id);
  }
}
