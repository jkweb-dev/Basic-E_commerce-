import Order from "../models/orderSchema.js";

export const  Orderlogic = async (req , res) => {
try {
    const order = req.body;

await Order.create(order);


res.json({
    success : true,
    message : "Order placed"
})
} catch (error) {
    res.json({
    success : false,
    message : "Order failed"
})
}
    

}

