import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ItemsModule } from './items/item.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot('mongodb+srv://<username>:<password>@cluster0.abce6.mongodb.net/<dbname>?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
