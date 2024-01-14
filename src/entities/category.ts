import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Restaurant } from "./restaurant";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(type => Restaurant, restaurant_id => restaurant_id.id)
    restaurant_id: number;
}