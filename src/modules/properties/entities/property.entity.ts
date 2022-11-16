import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';

const validOperation = {
  values: ['sale', 'rental'],
  message: '{VALUE} not supported',
};

@Schema()
export class Property {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true, default: 'sale', enum: validOperation })
  operationType: string;

  @Prop(
    raw({
      surface: { type: String },
      bathrooms: { type: String },
    }),
  )
  features: Record<string, any>;
  //  // surface: string[];
}

export const PropertySchema = SchemaFactory.createForClass(Property);
