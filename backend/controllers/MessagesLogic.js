import Message from "../models/messagesSchema.js"
 const messageLogic = async (req , res) => {
    const {name , email , phone , subject , message} = req.body;

    if (!name || !email || !phone || !subject || !message){
        return res.json("All Fields Are Required")
    }
    try {
        
        const newMessage = new Message({name , email , phone , subject , message})
        await newMessage.save();
        res.json( "Message Saved")
    } catch (error) {
        console.log(error)
        res.json( "Server Error")
    }

}

export default messageLogic;