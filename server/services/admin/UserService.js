const UserModel = require("../../models/UserModel")

const UserService = {
    //登录
    login: async ({ username, password }) => {
        return UserModel.find({
            username,
            password
        })
    },
    //图片上传
    upload: async ({ _id, username, introduction, gender, avatar }) => {
        return UserModel.updateOne({
            _id
        }, {
            username, introduction, gender, avatar
        })
    }
}

module.exports = UserService