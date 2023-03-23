const NewsService = require('../../services/admin/NewsService')

const NewsController = {
    //添加新闻
    add: async (req, res) => {
        const cover = req.file ? `/newsuploads/${req.file.filename}` : ""
        const { title, content, category, isPublish } = req.body
        //调用 service进行添加
        await NewsService.add({
            title, content,
            category: Number(category),
            isPublish: Number(isPublish),
            cover,
            editTime: new Date()
        })
        res.send({
            ActionType: "OK"
        })
    },
    //新闻列表
    getList: async (req, res) => {
        const result = await NewsService.getList()
        res.send({
            ActionType: "OK",
            data: result
        })
    }
}

module.exports = NewsController

