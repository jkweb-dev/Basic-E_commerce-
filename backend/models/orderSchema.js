import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

   iten: [
    {
        name: {
            type: String,
            required : true
        },
         category: {
            type: String,
            required : true
        },
         price: {
            type: Number,
            required : true
        },
        image: {
            type: String,
            required : true
        }

    }
   ],

   item : {
     name: {
            type: String,
            required : true
        },

         phonenumber: {
            type: Number,
            required : true
        },

         address: {
            type: String,
            required : true
        },

         city: {
            type: String,
            required : true
        },

        postal: {
            type: Number,
            required : true
        },
   },

   Total: {type: Number , required : true} ,
   paymentMethod : {type : String , required :true}
})

const Order = mongoose.model("Order" , orderSchema);

export default Order;