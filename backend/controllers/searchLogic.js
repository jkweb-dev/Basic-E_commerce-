import Product from "../models/productSchema.js";

export const searchLogic = async (req , res) => {
    const q = req.query.q;
    const products = await Product.find({
        $or : [
            {name : { $regex : q , $options : "i"}},
            {category : { $regex : q , $options : "i"}}
        ]
    })

    res.json(products)
}