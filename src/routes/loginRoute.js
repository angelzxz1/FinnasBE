import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../database/models/user.js";
//import { serialize } from "cookie"; this library is in case we need to store the token on a cookie client-side.

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

		/* 
		this is the code that will save the token on a cookie when the user logs in. (if needed)
		const serializedToken = serialize('userToken', token)
		res.setHeader('Set-Cookie', serializedToken ) */

		res.status(200).send({ message: "Login succeeded!", token, ok: true });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Server error" });
	}
});

export default loginRoute;
