import Product from "../models/productSchema.js";

export const Categorylogic = async (req , res) => {
const category = req.query.category;

const products = await Product.find({category});
res.json(products)
}

