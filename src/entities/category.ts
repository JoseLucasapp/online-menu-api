import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Restaurant } from "./restaurant";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(type => Restaurant, restaurant_id => restaurant_id.id)
    @JoinColumn()
    restaurant_id: number;
}