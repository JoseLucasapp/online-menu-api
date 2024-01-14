import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    street: string;
    @Column()
    neighborhood: string;
    @Column()
    number: number;
    @Column()
    city: string;
    @Column()
    state: string;
    @Column()
    zipcode: string;
    @Column()
    country: string;
}