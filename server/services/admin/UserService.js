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
        if (avatar) {
            return UserModel.updateOne({
                _id
            }, {
                username, introduction, gender, avatar
            })
        } else {
            return UserModel.updateOne({
                _id
            }, {
                username, introduction, gender
            })
        }
    },
    //添加用户
    add: async ({ username, introduction, gender, avatar, password, role }) => {
        return UserModel.create({
            username, introduction, gender, avatar, password, role
        })
    }
}

module.exports = UserService