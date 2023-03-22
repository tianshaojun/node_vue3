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
    },

    //用户列表
    getList: async ({ id }) => {
        return id ? UserModel.find({ _id: id }, ["username", "role", "introduction", "password"]) : UserModel.find({}, ["username", "role", "avatar", "introduction", "gender"])
    },

    //更新列表
    putList: async (body) => {
        return UserModel.updateOne({ _id: body._id }, body)
    },

    //删除用户
    delList: async ({ _id }) => {
        return UserModel.deleteOne({ _id })
    }
}

module.exports = UserService