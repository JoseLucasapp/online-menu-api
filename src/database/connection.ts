import { Sequelize } from 'sequelize-typescript'
import options from '../../sequelize'

const database = new Sequelize(options.database, options.username, options.password, {
    host: options.host,
    dialect: 'postgres'
})

export default database