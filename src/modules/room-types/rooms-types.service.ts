import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { CreateRoomTypesDto } from './dto/create-room-types.dto';
import { UpdateRoomTypesDto } from './dto/update-room-types.dto';
import { RoomType } from './entities/room-type.entity';

@Injectable()
export class RoomsTypeService {
  constructor(
    @InjectModel(RoomType.name) private roomTypesModel: Model<RoomType>,
  ) {}

  create(createRoomTypeDto: CreateRoomTypesDto) {
    const newType = new this.roomTypesModel(createRoomTypeDto);
    return newType.save();
  }

  findAll() {
    return this.roomTypesModel.find({});
  }

  findOne(id: number) {
    return this.roomTypesModel.findById(id);
  }

  update(id: number, updateRoomTypesDto: UpdateRoomTypesDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
