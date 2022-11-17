import { Property } from './entities/property.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Model } from 'mongoose';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel(Property.name) private propertyModel: Model<Property>,
  ) {}

  create(createPropertyDto: CreatePropertyDto) {
    const newProperty = new this.propertyModel(createPropertyDto);
    return newProperty.save();
  }

  findAll() {
    return this.propertyModel.find({});
  }

  findOne(id: string) {
    return this.propertyModel.findById(id);
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
