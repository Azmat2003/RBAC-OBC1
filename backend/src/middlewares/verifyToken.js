import jwt from 'jsonwebtoken'
import 'dotenv/config'

const verifyToken = (req, res, next)=>{
    console.log("inside verify Token");
    try{
        console.log("inside try");
        // get token from cookie
        const token = req.cookies.token;
        console.log("token", token);

        // check token
        if(!token){
            return res.status(401).json({
                message : "Not authenticated"
            })
        }

        console.log("Before token")
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log("After token payload", payload)
        
        // attach payload in req
        req.user = payload;

        // next function
        next();
    }
    catch(err){
        return res.status(500).json({
            message : "Internal Server Error"
        })
    }
}

export default verifyToken;