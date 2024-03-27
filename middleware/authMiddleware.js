import jwt from "jsonwebtoken"
import config from "../config.js";

function authMuddleware(req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try{
        const isToken = req.headers.authorization
        if(!isToken){
           return res.status(401).json({massege:"не авторизован"})
        }
        let token = isToken.split(' ')[1]
        const decoded = jwt.verify(token, config.SECRET_KEY)
        req.user = decoded
next()
    }
    catch (e){
        res.status(401).json({massege:"не авторизован"})
    }
}

export default authMuddleware