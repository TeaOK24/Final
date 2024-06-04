import base from "../db/base.js";
import { v4 } from "uuid";
import path from "path";
const { russian_cuisine } = base;


class russian_cuisine_controller {
    async create(req, res) {
        try {
            const { name, ingredients, manual_1, manual_2, manual_3, manual_4, manual_5, manual_6, manual_7, manual_8, manual_9, manual_10, estimation } = req.body;
            const { photo } = req.files;
            // const check = await russian_cuisine.findOne({ where: { name } })
            // if (check) { return res.json("такое блюдо уже существует") }
            let fileName = v4() + '.jpg';
            photo.mv(path.resolve(path.resolve(), 'static', fileName))

            console.log('+++++++++++++++++++++++')

            const { photo_manual_step1 } = req.files;
            let fileName_1 = v4() + '.jpg';
            photo_manual_step1.mv(path.resolve(path.resolve(), 'static', fileName_1))


                // const { photo_manual_step2 } = req.files;
                // let fileName_2 = v4() + '.jpg';
                // photo_manual_step2.mv(path.resolve(path.resolve(), 'static', fileName_2))

                // const { photo_manual_step3 } = req.files;
                // let fileName_3 = v4() + '.jpg';
                // photo_manual_step3.mv(path.resolve(path.resolve(), 'static', fileName_3))

                // const { photo_manual_step4 } = req.files;
                // let fileName_4 = v4() + '.jpg';
                // photo_manual_step4.mv(path.resolve(path.resolve(), 'static', fileName_4))

                // const { photo_manual_step5 } = req.files;
                // let fileName_5 = v4() + '.jpg';
                // photo_manual_step5.mv(path.resolve(path.resolve(), 'static', fileName_5))

                // const { photo_manual_step6 } = req.files;
                // let fileName_6 = v4() + '.jpg';
                // photo_manual_step6.mv(path.resolve(path.resolve(), 'static', fileName_6))

                // const { photo_manual_step7 } = req.files;
                // let fileName_7 = v4() + '.jpg';
                // photo_manual_step7.mv(path.resolve(path.resolve(), 'static', fileName_7))

                // const { photo_manual_step8 } = req.files;
                // let fileName_8 = v4() + '.jpg';
                // photo_manual_step8.mv(path.resolve(path.resolve(), 'static', fileName_8))

                // const { photo_manual_step9 } = req.files;
                // let fileName_9 = v4() + '.jpg';
                // photo_manual_step9.mv(path.resolve(path.resolve(), 'static', fileName_9))

                // const { photo_manual_step10 } = req.files;
                // let fileName_10 = v4() + '.jpg';
                // photo_manual_step10.mv(path.resolve(path.resolve(), 'static', fileName_10))
                console.log('+++++++++++++++++++++++')


                const food = await russian_cuisine.create({
                    name, ingredients, photo: fileName, 
                    photo_manual_step1: fileName_1, photo_manual_step2: fileName_2, 

                       manual_1, manual_2, manual_3, manual_4, manual_5, manual_6, manual_7, manual_8, manual_9, manual_10, 
                       estimation
                })
                
                // photo_manual_step1.mv(path.resolve(path.resolve(), 'static', fileName_1))
                // photo_manual_step2.mv(path.resolve(path.resolve(), 'static', fileName_2))
                // photo_manual_step3.mv(path.resolve(path.resolve(), 'static', fileName_3))
                // photo_manual_step4.mv(path.resolve(path.resolve(), 'static', fileName_4))
                // photo_manual_step5.mv(path.resolve(path.resolve(), 'static', fileName_5))
                // photo_manual_step6.mv(path.resolve(path.resolve(), 'static', fileName_6))
                // photo_manual_step7.mv(path.resolve(path.resolve(), 'static', fileName_7))
                // photo_manual_step8.mv(path.resolve(path.resolve(), 'static', fileName_8))
                // photo_manual_step9.mv(path.resolve(path.resolve(), 'static', fileName_9))
                // photo_manual_step10.mv(path.resolve(path.resolve(), 'static', fileName_10))
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