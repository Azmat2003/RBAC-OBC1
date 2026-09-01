import { hash } from "bcrypt";
import User from "../models/userModel.js";

const getProfile = async (req, res)=>{
    try{
        // req is coming from verifyToken
        // req.user
        const id = req.user.id;

        // search document in db with this id
        const data = await User.findById(id);

        return res.status(201).json({
            message : "success",
            data
        })
    }
    catch(err){
        return res.status(500).json({
            message : "Server Error"
        })
    }
}

const updatePassword = async (req, res)=>{
    try{
        const {id, role} = req.user;
        const {password : newPassword} = req.body;

        const newHashedPassword = await hash(newPassword, 10);
        // const user = await User.findById()

        const user = await User.findByIdAndUpdate(id, {password : newHashedPassword});
        console.log(user);

        return res.status(201).json({
            message : "password changed succesfully",
            user,
        })
    }
    catch(err){
        return res.status(500).json({
            message : "Server Error"
        })
    }
}

const deleteProfile = async (req, res)=>{
    try{
        const { id } = req.user;
        
        const result = await User.findByIdAndDelete(id);
        return res.status(200).json({
            message : "User Deleted successfully"
        })
    }
    catch(err){
        return res.status(500).json({
            message : "Server Error"
        })
    }
}

export {getProfile, updatePassword, deleteProfile};