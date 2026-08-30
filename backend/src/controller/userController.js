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

const updateProfile = (req, res)=>{

}

const deleteProfile = (req, res)=>[

]

export {getProfile, updateProfile, deleteProfile};