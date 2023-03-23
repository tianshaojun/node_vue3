const mongoose = require('mongoose')
const Schema = mongoose.Schema
//news模型===>news集合

const NewsType = {
    title: String,
    content: String,
    category: Number,
    cover: String, //封面
    isPublish: Number, //未发布,已发布
    editTime: Date
}

const NewsModel = mongoose.model('news', new Schema(NewsType))

module.exports = NewsModel