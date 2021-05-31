import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Game } from "src/game/entities/game.entity";
import { Host } from "src/host/entities/host.entity";

@Injectable()
export class MongoDBConfigService implements TypeOrmOptionsFactory {

    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mongodb',
            url: this.configService.get<string>('MONGODB_URL'),
            username: this.configService.get<string>('MONGODB_USER'),
            password: this.configService.get<string>('MONGODB_PASSWORD'),
            synchronize: this.configService.get<boolean>('MONGODB_SYNCHRONIZE'),
            entities: [Host, Game]
    };
  }
}