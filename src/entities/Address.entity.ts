import { DataTypes, Model } from "sequelize";
import database from "../database/connection";


interface AddressAttributes {
    id?: number;
    state: string;
    street: string;
    country: string;
    neighborhod: string;
    number: number;
    zipcode: number;

}

export class AddressEntity extends Model<AddressAttributes> {
    [x: string]: any;
}


AddressEntity.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    state: {
        type: DataTypes.CHAR
    },
    street: {
        type: DataTypes.CHAR
    },
    country: {
        type: DataTypes.CHAR
    },
    neighborhod: {
        type: DataTypes.CHAR
    },
    number: {
        type: DataTypes.INTEGER
    },
    zipcode: {
        type: DataTypes.INTEGER
    },
}, { sequelize: database, tableName: 'addresses' })