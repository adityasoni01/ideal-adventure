import connectMongo from "@/utils/connect";
import User from "@/models/userModel";

export default async function addTest(req,res){
    try{
    const {name,email,phone,address,password} = req.body;
    console.log(req.body);
    console.log("Connecting to Mongo");
    await connectMongo();
    console.log("Connected to Mongo");


    console.log("Creating Document");
    const user = await User.create({name,email,phone,address,password});
    console.log("Created Document");
    res.json({user});
    }
    catch(error){
        console.log(error)
        res.json(error);
    }
}