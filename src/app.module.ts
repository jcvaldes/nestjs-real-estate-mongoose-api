import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertiesModule } from './modules/properties/properties.module';
import { DatabaseModule } from './database/database.module';
import { RoomsTypesModule } from './modules/room-types/room-types.module';

@Module({
  imports: [PropertiesModule, DatabaseModule, RoomsTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
