import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { Property, PropertySchema } from './entities/property.entity';

@Module({
  imports: [
    // Le digo a mongoose con que colecciones quiero trabajar en este modulo
    MongooseModule.forFeature([
      { name: Property.name, schema: PropertySchema },
    ]),
  ],
  controllers: [PropertiesController],
  providers: [PropertiesService],
})
export class PropertiesModule {}
