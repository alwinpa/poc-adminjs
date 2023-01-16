'use strict';

import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from './index'

interface ISalesChannel {
    id: number;
    name: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
}

export type SalesChannelCreationAttributes = Optional<ISalesChannel, 'id'>

export class SalesChannel extends Model<ISalesChannel, SalesChannelCreationAttributes> {
    declare id: number;
    declare name: string;
    declare slug: string;
    declare createdAt: Date;
    declare updatedAt: Date;
  }

  SalesChannel.init(
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
    }, {
        sequelize,
        modelName: 'SalesChannel',
    })
