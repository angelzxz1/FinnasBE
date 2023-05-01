import { Router } from "express";
import * as bcrypt from "bcrypt";
import User from "../database/models/user.js";

const registerRoute = Router();

registerRoute.get("/", async (req, res) => {
	const users = await User.findAll();
	res.send({ users });
});

registerRoute.post("/", async (req, res) => {
	const { name, email, password } = req.body;
	console.log(name, email, password);
	try {
		//Checks if the user already exists
		const check = await User.findOne({ where: { email: email } });
		if (!name || !email || !password) {
			return res
				.status(401)
				.send({ message: "Information is Missing", ok: false });
		}
		if (check) {
			return res
				.status(401)
				.send({ message: "User already exists", ok: false });
		}
		//This variable is a hashed version of the password the user sent
		const hashedPassword = bcrypt.hashSync(password, 10);

		console.log(hashedPassword);
		User.create({ name, email, password: hashedPassword });
		res.status(201).send({ message: "User created", ok: true });
	} catch (error) {
		console.error(err);
		res.status(500).json({ message: "Server error" });
	}
});

export default registerRoute;
