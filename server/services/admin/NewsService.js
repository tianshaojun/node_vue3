const NewsModel = require("../../models/NewsModel")

const NewsService = {
    //添加新闻
    add: async ({ title, content, category, cover, isPublish, editTime }) => {
        return NewsModel.create({
            title, content, category, cover, isPublish, editTime
        })
    },
    //新闻列表
    getList: async () => {
        return NewsModel.find({})
    }
}

module.exports = NewsService