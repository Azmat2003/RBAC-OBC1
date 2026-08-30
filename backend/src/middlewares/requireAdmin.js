const requireAdmin = (req, res, next)=>{
    try{
        console.log("Inside requireAmin")
        // check role
        // in req payload is available
        const role = req.user.role;

        if(role === "ADMIN"){
            console.log("admin")
            next();
        }
        else{
            console.log("not admin")
            return res.status(403).json({
                message : "Forbidden access"
            })
        }

    }
    catch(err){
        return res.status(500).json({
            message : "Server Error"
        })
    }
}

export default requireAdmin;