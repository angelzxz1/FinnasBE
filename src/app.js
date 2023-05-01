import express from "express";
import helmet from "helmet";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";
import purchaseRoutes from "./routes/purchaseRoutes.js";
import loginRoute from "./routes/loginRoute.js";
import registerRoute from "./routes/registerRoute.js";

const app = express();

// Use middleware for security
app.use(helmet());

// Enable CORS
app.use(cors());

// Parse incoming request bodies as JSON
app.use(express.json());

// Define routes for purchases and users
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/purchases", purchaseRoutes);

//Basic get route.
app.get("/", (req, res) => {
	res.json({
		answer: "this is the answer",
	});
});

// app.use("/syncDatabase", )

// Error handling middleware
app.use(errorHandler);

export default app;
