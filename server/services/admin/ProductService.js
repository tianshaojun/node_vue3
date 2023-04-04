const ProductModel = require("../../models/ProductModel")

const ProductService = {
    add: async ({ title, introduction, detail, cover, editTime }) => {
        return ProductModel.create({
            title, introduction, detail, cover, editTime
        })
    },

    updateList: async ({ title, introduction, detail, _id, cover, editTime }) => {
        if (cover) {
            return ProductModel.updateOne({ _id }, {
                title, introduction, detail, cover, editTime
            })
        } else {
            return ProductModel.updateOne({ _id }, {
                title, introduction, detail, editTime
            })
        }
    },

    getList: async ({ _id }) => {
        return _id ? ProductModel.find({ _id }) : ProductModel.find({})
    },
    delList: async ({ _id }) => {
        return ProductModel.deleteOne({
            _id
        })
    },

    // publish:async ({_id,isPublish,editTime})=>{
    //     return NewsModel.updateOne({
    //         _id
    //     },{
    //         isPublish,
    //         editTime
    //     })
    // }
}

module.exports = ProductService