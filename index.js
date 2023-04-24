import app from "./src/app.js";
import sequelize from "./src/database/conn.js";

const PORT = process.env.PORT || 3000;
// Connect to the database and start the server
sequelize
	.sync()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server listening on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.log("Unable to connect to the database:", error);
	});
