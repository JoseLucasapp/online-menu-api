import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '../.env.development'
  }), DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '../.env.development'
  })]
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
