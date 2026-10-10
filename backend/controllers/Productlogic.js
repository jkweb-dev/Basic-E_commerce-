import Product from "../models/productSchema.js"
export const productLogic = async (req , res) => {
    const categories = ["Watches" , "Pants" , "Books" , "Electronics"]

    const result = await Promise.all(
        categories.map(category => 
            Product.findOne({category})
        )
    )
    res.json(result)
};

export const shopCategory = async (req,res) => {
    const categories = ["Watches" , "Pants" , "Books" , "Electronics"]

    const result =await Promise.all(categories.map(category => Product.find({category}).skip(1).limit(1)))

    res.json(result)
};

export const newArrival = async (req,res) => {
    const categories = ["Watches" , "Pants" ,   "Electronics" ]

    const result =await Promise.all(categories.map(category => Product.find({category}).skip(7).limit(1)))

    res.json(result)
};