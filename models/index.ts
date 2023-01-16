import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('postgres://coverfox:@localhost:5432/adminjs', {
  dialect: 'postgres',
})

export default sequelize

