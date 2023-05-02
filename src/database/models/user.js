import { DataTypes } from "sequelize";
import conn from "../conn.js";

const User = conn.define(
	"User",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
			unique: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		createdAt: {
			type: DataTypes.DATE,
			get: function () {
				return this.getDataValue("createdAt").toLocaleString("en-GB", {
					timeZone: "UTC",
				});
			},
		},
	},
	{
		timestamps: false,
	}
);

export default User;
