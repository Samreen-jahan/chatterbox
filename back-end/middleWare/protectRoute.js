import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
const protectRoute = async(req,res,next)=>{
    try{
       const cookie  = req.cookies.jwt;
       if(!token){
        return   res.state(401).json({error:"Unauthorized - no token Provided"});
       }
       const decoded = jwt.verify(token , process.env.JWT_SECRET);

       if(!decoded){
        return res.state(401).json({error:"Unauthorized - invalid token Provided"});
    
       }
       const user = await User.findById(decoded.userId).select("-password");
       if(!user){
        return res.status(404).json({error:"user not found"});
       
       }
       req.user = user;
       next();
    }
    catch(error){
        console.log("error in protectRoute middleWare",error.message);
        res.state(500).json({error:"Internal server error"});
    }
}
export default  protectRoute;