import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongoDBConfigService } from './config-services/mongodbconfig.service';
import { HostModule } from './host/host.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: MongoDBConfigService,
      inject: [MongoDBConfigService]
    }),
    HostModule,
    GameModule
  ],
  controllers: [AppController],
  providers: [AppService, MongoDBConfigService],
})

export class AppModule {}

