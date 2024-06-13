import base from "../db/base.js";
import { v4 } from "uuid";
import path from "path";
const { russian_cuisine } = base;


class russian_cuisine_controller {
    async create(req, res) {
        try {
            const { name, ingredients, manual, estimation } = req.body;
            const { photo, photo_manual } = req.files;
            console.log(photo)
            let files = []
            photo_manual.forEach(element => {
                console.log(element)
                let fileName = v4() + '.jpg';
                element.mv(path.resolve(path.resolve(), 'static', fileName))
                files.push(fileName)
            });
            console.log(files)
            let fileName = v4() + '.jpg';
            photo.mv(path.resolve(path.resolve(), 'static', fileName))
            const food = await russian_cuisine.create({
                name, ingredients, manual, photo: fileName, photo_manual:files, estimation
            })
            return res.redirect("/add")
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

    async getAll() {
        return await russian_cuisine.findAll()
    }
}

export default new russian_cuisine_controller()