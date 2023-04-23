import {Sequelize} from 'sequelize'

const {DB_URL, DB_NAME, DB_HOST, DB_PWRD, DB_USER, DB_PORT} = process.env;

const conn = new Sequelize(DB_NAME, DB_USER, DB_PWRD,{
    host:DB_HOST,
    dialect:'postgres',
    logging:false
})

export default conn
//consol.elog(DB_URL, DB_NAME, DB_HOST, DB_PWRD, DB_USER, DB_PORT)

