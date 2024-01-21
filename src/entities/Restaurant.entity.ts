import { DataTypes, Model } from "sequelize";
import database from "../database/connection";

export interface RestaurantAttributes {
    id?: number;
    name: string;
    email: string;
    password: string;
    logo: string;
    address_id: number;
}

export default class RestaurantEntity extends Model<RestaurantAttributes> {
    [x: string]: any;
}

RestaurantEntity.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    email: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    password: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    logo: {
        type: DataTypes.CHAR
    },
    address_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'addresses',
            key: 'id'
        }
    }
}, { sequelize: database, tableName: 'restaurants' })