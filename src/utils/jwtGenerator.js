const jwt = require('jsonwebtoken');

require('dotenv').config();

const jwtGenerator = (iduser) =>{
    const payload = {
        user : iduser
    }
  
   return  jwt.sign(payload, `${process.env.JWT_KEY}`, {expiresIn : 60 * 60})
}




module.exports = jwtGenerator;