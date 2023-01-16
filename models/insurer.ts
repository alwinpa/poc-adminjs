import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from './index'

interface IInsurer {
    id: number;
    name: string;
    status: boolean;
    description: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
}

export type InsurerCreationAttributes = Optional<IInsurer, 'id'>

export class Insurer extends Model<IInsurer, InsurerCreationAttributes> {
    declare id: number;
    declare name: string;
    declare slug: string;
    declare status: boolean;
    declare description: string;
    declare createdAt: Date;
    declare updatedAt: Date;
  }

  Insurer.init(
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
              status:{
                type: new DataTypes.BOOLEAN,
                defaultValue: false,
              },
              description: {
                type: new DataTypes.STRING(400),
              },
    }, {
        sequelize,
        modelName: 'Insurer',
    })