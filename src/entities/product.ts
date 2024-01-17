import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    @Column()
    image: string;
    @Column()
    price: number;
    @Column()
    description: string;
    @OneToOne(type => Category, category_id => category_id.id)
    @JoinColumn()
    category_id: number;
}