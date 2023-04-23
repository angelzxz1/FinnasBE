import { DataTypes } from 'sequelize'
import conn from '../conn.js'

const Purchase = conn.define(
    'Purchase',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        hour: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        amountSpent: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        freezeTableName:true
    }
)

export default Purchase

