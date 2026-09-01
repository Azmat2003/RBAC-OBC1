import User from "../models/userModel.js"

const getUsers = async (req, res)=>{
    try{
        // get all user
        const users = await User.find();

        return res.status(201).json({
            message : "success",
            users
        })
    }
    catch(err){
        return res.status(500).json({
            message : "Server Error"
        })
    }
}

const getUserById = async (req, res)=>{
    try{
        const id = req.params;  // id => emailid of the user

        const result = await User.findOne({email : id});

        return res.status(200).json({
            message : "success",
            user : result
        })
    }
    catch(err){
        return res.status(500).json({
            message : "Server Error"
        })
    }
}

const updateUserById = (req, res)=>{
    // what to update
}

const deleteUserById = async (req, res)=>{
    try{
        const id = req.params;  // id => emailid of the user

        const result = await User.deleteOne({email : id});

        return res.status(200).json({
            message : "User deleted by admin"
        })
    }
    catch(err){
        return res.status(500).json({
            message : "Server Error"
        })
    }
}

const getStats = async (req, res)=>{
    try{
        // no of users = user + admin
        const total = await User.countDocuments({});

        // no of normal user
        const users = await User.countDocuments({role : "USER"});

        // no of admin
        const admins = await User.countDocuments({role : "ADMIN"});

        return res.status(200).json({
            message : "success",
            total,
            users,
            admins,
        })
    }
    catch(err){
        return res.status(500).json({
            message : "Server Error"
        })
    }
}

export {getUsers, getUserById, updateUserById, deleteUserById, getStats};