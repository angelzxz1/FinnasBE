import { Router } from "express";
import * as bcrypt from "bcrypt";
import User from "../database/models/user.js";

const registerRoute = Router();

registerRoute.post("/", async (req, res) => {
	const { name, email, password, username } = req.body;

	//Checks if the user already exists
	const check = await User.findOne({ where: { email: email } });
	if (!name || !email || !password || !username) {
		return res
			.status(401)
			.send({ message: "Information is Missing", ok: false });
	}
	if (check) {
		return res
			.status(401)
			.send({ message: "User already exists", ok: false });
	}
	try {
		//This variable is a hashed version of the password the user sent
		const hashedPassword = bcrypt.hashSync(password, 10);
		//console.log(username);
		User.create({
			name: name.toLowerCase(),
			email: email.toLowerCase(),
			password: hashedPassword,
			username: username,
			createdAt: new Date(),
		});
		res.status(201).send({ message: "User created", ok: true });
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: "Server error",
			error: error.message,
			ok: false,
		});
	}
});

export default registerRoute;
