const NewsModel = require("../../models/NewsModel")

const NewsService = {
    //添加新闻
    add: async ({ title, content, category, cover, isPublish, editTime }) => {
        return NewsModel.create({
            title, content, category, cover, isPublish, editTime
        })
    },
    //新闻列表
    getList: async ({ _id }) => {
        return _id ? NewsModel.find({ _id }) : NewsModel.find({})
    },
    //更新列表
    updateList: async ({ _id, title, content, category, isPublish, cover, editTime }) => {
        if (cover) {
            return NewsModel.updateOne({ _id }, {
                title, content, category, isPublish, cover, editTime
            })
        } else {
            return NewsModel.updateOne({ _id }, {
                title, content, category, isPublish, editTime
            })
        }
    },
    //发布新闻
    publish: async ({ _id, isPublish, editTime }) => {
        return NewsModel.updateOne({
            _id
        }, {
            isPublish,
            editTime
        })
    },
    //删除新闻
    delList: async ({ _id }) => {
        return NewsModel.deleteOne({
            _id
        })
    },
}

module.exports = NewsService