import { Router } from "express";
import User from "../database/models/user.js";

const userRoute = Router();

userRoute.get("/", async (req, res) => {
	const users = await User.findAll();
	res.send({ users });
});

userRoute.get("/:id", async (req, res) => {
	const { id } = req.params;
	const user = await User.findByPk(id);
	if (!user) {
		return res.status(404).send({ message: "User not found", ok: false });
	}
	res.status(200).send({ user: user, ok: true });
});

userRoute.delete("/:id", async (req, res) => {
	const { id } = req.params;
	const user = await User.findByPk(id);
	if (!user) {
		return res.status(404).send({ message: "User not found", ok: false });
	}
	user.destroy();
	res.status(200).send({ message: "User has been deleted", ok: true });
});

export default userRoute;
