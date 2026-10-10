import Product from "../models/productSchema.js";

const productdetails = async (req,res) => {
    const name = req.query.name;
    const product = await Product.findOne({name});
    res.json(product)
}

export default productdetails