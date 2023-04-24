import Purchase from "../database/models/purchase.js";

export const createPurchase = async (req, res) => {
	try {
		const { date, hour, amount } = req.body;
		const purchase = await Purchase.create({ date, hour, amount });
		res.status(201).json(purchase);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const getPurchaseById = async (req, res) => {
	try {
		const { id } = req.params;
		const purchase = await Purchase.findByPk(id);
		if (purchase) {
			res.json(purchase);
		} else {
			res.status(404).json({ message: "Purchase not found" });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const getPurchases = async (req, res) => {
	try {
		const purchases = await Purchase.findAll();
		res.json(purchases);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
	}
};
