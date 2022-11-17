import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://jcvaldes:<password>@cluster0.kgn4b.mongodb.net/test
    ', {
      // user: 'redint',
      // pass: 'redint',
      dbName: 'redintdb',
    }),
  ],
})
export class DatabaseModule {}
