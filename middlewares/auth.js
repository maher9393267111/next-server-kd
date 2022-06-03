


//verify req.cookies.token by jwt.verify


import  jwt from 'jsonwebtoken';
export const cookieverify = (req, res) => {
  try{

const userinfo = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
console.log(userinfo);
return res.json({
  user: userinfo
});


  }
  catch(err){
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }

}






// //import {prmisify} from 'util'
// import { expressjwt } from "express-jwt";
// export const requireSignin = expressjwt({
//   getToken: (req, res) => req.cookies.token,
//   secret: process.env.JWT_SECRET,
//   algorithms: ["HS256"],
// });
 