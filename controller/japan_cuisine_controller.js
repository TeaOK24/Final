import base from "../db/base.js";
const { japan_cuisine } = base;


class japan_cuisine_controller {
    async create(req, res) {
        try {
            const { name, ingredients, photo, manual, estimation } = req.body;
            const check = await japan_cuisine.findOne({ where: { name } })
            if (check) { return res.json("неполучилось добавить") }
            const food = await japan_cuisine.create({ name, ingredients, photo, manual, estimation })
            res.json(food)
        }
        catch (e) {
            res.json(e)
        }
    }

    async find(req, res) {
        try {
            console.log(req.query)
            const { name } = req.query
            if (!name) {
                const food = await japan_cuisine.findAndCountAll()
                return res.json(food)
            }
            const food = await japan_cuisine.findAndCountAll({ where: { name } })
            console.log(food.count)
            if (food.count === 0) {
                return res.json("такого блюда не существует")
            }
            return res.json(food)
        }
        catch (e) {
            res.json(e)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params
            const food = await japan_cuisine.findByPk(id)
            if (!food) {
                return res.json('такого блюда больше не существует')
            }
            await food.destroy()
            return res.json("food from name: " + food.name + " deleted")
        }
        catch (e) {
            res.json(e)
        }
    }

    async getAll (){
        return await japan_cuisine.findAll()
    }
}

export default new japan_cuisine_controller()