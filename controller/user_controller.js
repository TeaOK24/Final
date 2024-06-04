import ApiError from "../error/ApiError.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import base from "../db/base.js";
import config from "../config.js";


const { User } = base;

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        config.SECRET_KEY,
        { expiresIn: '24h' }
    )
}



class user_controller {

    async registration(req, res, next) {
        const { email, password, role } = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некоректный email или пароль'))
        }
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            return next(ApiError.badRequest('Такой email уже зарегистрирован'))
        }
        const hasPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ email, role, password: hasPassword })
        const token = generateJwt(user.id, user.email, user.role)
        const data = {
            token: token
        }
        res.render('reg_prom', data)

    }

    async login(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return next(ApiError.internal('Рользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.redirect("/res_log")
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.redirect("/res_log")
    }
}

export default new user_controller()