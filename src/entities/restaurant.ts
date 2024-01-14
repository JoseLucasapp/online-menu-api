import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./address";

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    logo: string;

    @OneToOne(type => Address, address_id => address_id.id)
    address_id: Address
}