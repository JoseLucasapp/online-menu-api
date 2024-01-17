import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Address } from "src/entities/address";
import { Category } from "src/entities/category";
import { Product } from "src/entities/product";
import { Restaurant } from "src/entities/restaurant";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: 5432,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            entities: [Restaurant, Address, Category, Product],
            synchronize: true,
        }), ConfigModule.forRoot()
    ]
})

export class DatabaseModule { }