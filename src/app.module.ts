import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { TasksModule } from './tasks/tasks.module';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
