import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class RoomType {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  points: number;

  @Prop({ required: true, default: 1 })
  order: number;
}

export const RoomTypeSchema = SchemaFactory.createForClass(RoomType);
