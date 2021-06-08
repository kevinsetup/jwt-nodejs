const jwt = require('jsonwebtoken');
require("dotenv").config();
const pool = require('../database');
 const verifyToken = async(req,res,next) =>{
    try {
        const jwtToken = req.header("token");
        if(!jwtToken){
            return res.status(403).json("Not Authorize");


        }
        const payload = jwt.verify(jwtToken,  `${process.env.JWT_KEY}`)

        req.user = payload.user;
        next();



    } catch (error) {
        return res.status(403).json("not Authorize")
        
    }

}
 const isComision = async( req,res, next) =>{
     console.log(req.user);
    const user = await pool.query('Select * from usertab where iduser = $1' , [req.user]);
    const roles = await pool.query(`select  role_name from users_roles us join usertab u 
    on u.iduser = us.iduser join role r on r.role_id = us.role_id where username = $1` , [user.rows[0].username] )
    console.log(roles.rows[0].role_name)
   if(roles.rows[0].role_name === "Comision"){
       next()
       return;
   }
   
    return res.status(403).json({message : 'No tienes los permisos necesarios'});

   



};

 const isProfessor = async( req,res) =>{

};

module.exports = {
    verifyToken,
    isComision,
    isProfessor
}
