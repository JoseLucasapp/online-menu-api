import { DataTypes, Model } from "sequelize";
import database from "../database/connection";

export interface ProductAttributes {
    id?: number,
    image: string,
    name: string,
    price: number,
    description: string,
    category_id: number
}

export default class ProductEntity extends Model<ProductAttributes> {
    [x: string]: any
}

ProductEntity.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    image: {
        type: DataTypes.CHAR
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.CHAR
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id'
        }
    }
}, { sequelize: database, tableName: 'products' })