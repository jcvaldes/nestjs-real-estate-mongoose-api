import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      // user: 'redint',
      // pass: 'redint',
      dbName: 'redintdb',
    }),
  ],
})
export class DatabaseModule {}
