import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../database/models/user.js";

const loginRoute = Router();

loginRoute.post("/", async (req, res) => {
	const { email, password } = req.body;

	try {
		// Check if user exists
		const user = await User.findOne({ where: { email } });
		if (!user) {
			return res
				.status(401)
				.json({ message: "Invalid email or password" });
		}

		// Check if password is correct
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res
				.status(401)
				.json({ message: "Invalid email or password" });
		}

		// Create and return JWT token
		const token = jwt.sign(
			{ id: user.id, email: user.email },
			"$#dev_secret_jsonwebtoken_key_2998735667#$",
			{
				expiresIn: "1h",
			}
		);
		res.status(200).send({ message: "Login succeeded!", ok: true, token });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Server error" });
	}
});

export default loginRoute;
