import app from "./src/app.js";
import sequelize from "./src/database/conn.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
// Connect to the database and start the server
sequelize
	.sync({ alter: true })
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server listening on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.log("Unable to connect to the database:", error);
	});
