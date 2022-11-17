import { Module } from '@nestjs/common';
import { RoomsTypeService } from './rooms-types.service';
import { RoomsTypesController } from './room-types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomType, RoomTypeSchema } from './entities/room-type.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RoomType.name, schema: RoomTypeSchema },
    ]),
  ],
  controllers: [RoomsTypesController],
  providers: [RoomsTypeService],
})
export class RoomsTypesModule {}
