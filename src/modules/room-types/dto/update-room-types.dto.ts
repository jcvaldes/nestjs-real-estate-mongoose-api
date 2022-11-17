import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomTypesDto } from './create-room-types.dto';

export class UpdateRoomTypesDto extends PartialType(CreateRoomTypesDto) {}
