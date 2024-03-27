import jwt from "jsonwebtoken"
import config from "../config.js";

function checkMiddleware(role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const isToken = req.headers.authorization
            if (!isToken) {
                return res.status(401).json({ massege: "не авторизован" })
            }
            let token = isToken.split(' ')[1]
            const decoded = jwt.verify(token, config.SECRET_KEY)
            if (decoded.role !== role){
                return res.status(403).json({ massege: "нет доступа" })
            }
            req.user = decoded
            next()
        }
        catch (e) {
            res.status(401).json({ massege: "не авторизован" })
        }
    }
}




export default checkMiddleware