import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://jcvaldes:secrettest@cluster0.kgn4b.mongodb.net/?retryWrites=true&w=majority',
      {
        // user: 'redint',
        // pass: 'redint',
        dbName: 'redintdb',
      },
    ),
  ],
})
export class DatabaseModule {}
