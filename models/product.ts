import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from './index'

interface IProduct {
    id: number;
    name: string;
    slug: string;
    status: boolean;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    sales_channel: number;
    insurer: number;
}

export type ProductCreationAttributes = Optional<IProduct, 'id'>

export class Product extends Model<IProduct, ProductCreationAttributes> {
    declare id: number;
    declare name: string;
    declare slug: string;
    declare createdAt: Date;
    declare updatedAt: Date;
    declare status: boolean;
    declare description: string;
    declare sales_channel: number;
    declare insurer: number;
}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        slug: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
        status: {
            type: new DataTypes.BOOLEAN,
            defaultValue: false,
        },
        description: {
            type: new DataTypes.STRING(400),
            allowNull: false,
        },
        sales_channel: {
            type: new DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: {
                    tableName: 'SalesChannels',
                },
                key: 'id'
            }
        },
        insurer: {
            type: new DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: {
                    tableName: 'Insurers',
                },
                key: 'id'
            }
        },
    }, {
    sequelize,
    modelName: 'Product',
})
