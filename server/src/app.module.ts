import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbUri = process.env.DB_URI;
if (!dbUri) {
  throw new Error('.env DB_URI is missing');
}

@Module({
  imports: [UsersModule, MongooseModule.forRoot(dbUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
