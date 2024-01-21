import { DataTypes, Model } from "sequelize";
import database from "../database/connection";

export interface CategoryAttributes {
    id?: number;
    name: string;
    restaurant_id: number;
}

export default class CategoryEntity extends Model<CategoryAttributes> {
    [x: string]: any;
}

CategoryEntity.init({
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
    restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'restaurants',
            key: 'id'
        }
    }
}, { sequelize: database, tableName: 'categories' })