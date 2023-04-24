import express from "express";
import helmet from "helmet";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";
import purchaseRoutes from "./routes/purchaseRoutes.js";
const app = express();

// Use middleware for security
app.use(helmet());

// Enable CORS
app.use(cors());

// Parse incoming request bodies as JSON
app.use(express.json());

// Define routes for purchases and users
app.use("/purchases", purchaseRoutes);
app.use("/", (req, res) => {
	res.json({
		answer: "this is the answer",
	});
});

// app.use("/syncDatabase", )

// Error handling middleware
app.use(errorHandler);

export default app;
