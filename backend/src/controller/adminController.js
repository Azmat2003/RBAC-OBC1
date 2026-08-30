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

const getUserById = (req, res)=>{

}

const updateUserById = (req, res)=>{

}

const deleteUserById = (req, res)=>{

}

const getStats = (req, res)=>{

}

export {getUsers, getUserById, updateUserById, deleteUserById, getStats};