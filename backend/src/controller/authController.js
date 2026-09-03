import bcrypt, { compare, hash } from 'bcrypt';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const register = async (req, res)=>{
    console.log("Inside register");
    try{
        const user = req.body;

        // hashing the password
        const hashedPwd = await hash(user.password, 10);

        const newUser = {...user, password : hashedPwd};

        // store it in db
        const db_res = await User.create(newUser);
        console.log(db_res);

        // send the response
        res.status(201).json({
            message : "User created succesfully",
            user : db_res
        })
    }
    catch(err){
        res.status(500).json({
            message : "Server Error"
        })
    }
}

const login = async (req, res)=>{
    console.log("Inside login");
    try{
        // req.body => email, pwd
        const {email, password : pwd} = req.body;

        // look for the user in db
        const data = await User.findOne({email});

        if(!data){
            return res.status(401).json({
                message : "User does not exist",
            })
        }

        // compare pwd
        const hashedPwd = data.password;
        const result = await compare(pwd, hashedPwd);
        
        console.log("result", result);
        if(!result){
            return res.status(401).json({
                message : "Incorrect password or email"
            })
        }

        // generate jwt token
        const payload = {
            id : data._id,
            role : data.role
            // email, pwd, other data
        }

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY
        )
        console.log("token", token);

        // 1. in cookies
        res.cookie('token', token, {
            httpOnly: true, // restrict the access of cookie via JavaScript code
        });

        // 2. inside json
        return res.status(201).json({
            message : "Logged in",
            user : {
                    name: data.name,
                    role : data.role
                }
            // token,
        })
    }
    catch(err){
        return res.status(500).json({
            message : "Internal Server Error"
        })
    }
}

const logout = (req, res)=>{
    console.log("Inside logout");
    try{
        console.log("try logout");
        res.clearCookie('token');
        console.log("try logout");

        return res.status(201).json({
            message : "Logout success"
        })
    }
    catch(err){
        return res.status(500).json({
            message : "Internal Server Error"
        })
    }
}

const getMe = async (req, res)=>{
    try{
        // payload of user from req, 
        // that has been attached while verifyToken
        // const user = req.user;
        const {id, role} = req.user;

        // search user by id in db
        const result = await User.findById(id);

        if(!result){
            return res.status(404).json({
                message : "failed"
            })
        }

        return res.status(201).json({
            message : "Success",
            user : result
        })
    }
    catch(err){
         return res.status(501).json({
            message : "Server Error",
        })
    }
}

export {register, login, logout, getMe};