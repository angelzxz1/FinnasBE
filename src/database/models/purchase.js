import { DataTypes } from "sequelize";
import conn from "../conn.js";

const Purchase = conn.define(
	"Purchase",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		date: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		hour: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		amountSpent: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

export default Purchase;
