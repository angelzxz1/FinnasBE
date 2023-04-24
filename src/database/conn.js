import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const { DB_URL, DB_NAME, DB_HOST, DB_PWRD, DB_USER, DB_PORT } = process.env;
const conn = new Sequelize(DB_URL);

export default conn;
