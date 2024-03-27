import base from "../db/base.js";
const { russian_cuisine } = base;


class russian_cuisine_controller {
    async create(req, res) {
        console.log("++++++++++++++++++++++++++++++")
        try {
            const { name, ingredients, photo, manual, estimation } = req.body;
            console.log(name)
            // const check = await russian_cuisine.findOne({ where: { name } })
            // if (check) { return res.json("такое блюдо уже существует") }
            const food = await russian_cuisine.create({ name, ingredients, photo, manual, estimation })
            res.redirect("/add")
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
                const food = await russian_cuisine.findAndCountAll()
                return res.json(food)
            }
            const food = await russian_cuisine.findAndCountAll({ where: { name } })
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
            const food = await russian_cuisine.findByPk(id)
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
        return await russian_cuisine.findAll()
    }
}

export default new russian_cuisine_controller()