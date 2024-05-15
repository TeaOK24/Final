import base from "../db/base.js";
const { soups } = base;


class soups_controller {
    async create(req, res) {
        try {
            const { name, ingredients, photo, manual, estimation } = req.body;
            const check = await soups.findOne({ where: { name } })
            if (check) { return res.json("неполучилось добавить") }
            const food = await soups.create({ name, ingredients, photo, manual, estimation })
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
                const food = await soups.findAndCountAll()
                return res.json(food)
            }
            const food = await soups.findAndCountAll({ where: { name } })
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
            const food = await soups.findByPk(id)
            if (!food) {
                return res.json('такого блюда не существует')
            }
            await food.destroy()
            return res.json("food from name: " + food.name + " deleted")
        }
        catch (e) {
            res.json(e)
        }
    }

    async getAll (){
        return await soups.findAll()
    }
}

export default new soups_controller()