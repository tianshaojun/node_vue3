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
    //更新列表
    updateList: async (req, res) => {
        const cover = req.file ? `/newsuploads/${req.file.filename}` : ""
        const { title, content, category, isPublish, _id } = req.body
        //调用 service进行添加
        await NewsService.updateList({
            _id,
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
        const result = await NewsService.getList({ _id: req.params.id })
        res.send({
            ActionType: "OK",
            data: result
        })
    },
    //发布新闻
    publish: async (req, res) => {
        await NewsService.publish({
            ...req.body,
            editTime: new Date()
        })
        res.send({
            ActionType: "OK",
        })
    },
    //删除新闻
    delList: async (req, res) => {
        await NewsService.delList({ _id: req.params.id })
        res.send({
            ActionType: "OK"
        })
    },
}

module.exports = NewsController

