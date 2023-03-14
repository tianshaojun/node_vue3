const UserService = require('../../services/admin/UserService')
const JWT = require("../../util/JWT")

const UserController = {
    //登录
    login: async (req, res) => {
        console.log(req.body, '3333333333')
        var result = await UserService.login(req.body)
        console.log(result)

        if (result.length === 0) {
            res.send({
                code: "-1",
                error: "用户名密码不匹配"
            })
        } else {

            //生成token
            const token = JWT.generate({
                _id: result[0]._id,
                username: result[0].username
            }, "1d")

            res.header("Authorization", token);

            res.send({
                ActionType: "ok",
                data: {
                    username: result[0].username,
                    gender: result[0].gender ? result[0].gender : 0,
                    introduction: result[0].introduction,
                    avatar: result[0].avatar,
                    role: result[0].role
                }
            })
        }
    },

    //图片上传
    upload: async (req, res) => {
        // console.log(req.body,req.file)
        const { username, introduction, gender } = req.body
        const token = req.headers["authorization"].split(" ")[1]
        const avatar = `/avataruploads/${req.file.filename}`
        var payload = JWT.verify(token)
        // console.log(payload._id)
        //调用service 模块更新 数据

        await UserService.upload({ _id: payload._id, username, introduction, gender: Number(gender), avatar })
        res.send({
            ActionType: "OK"
        })
    }
}

module.exports = UserController

