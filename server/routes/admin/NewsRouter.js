var express = require('express');
var NewsRouter = express.Router();
const NewsController = require('../../controllers/admin/NewsController');

//图片上传
const multer = require('multer');
const upload = multer({ dest: 'public/newsuploads/' });

//涉及文件上传,普通post不行,需要加上multer中间件
NewsRouter.post("/adminapi/news/add", upload.single('file'), NewsController.add);
NewsRouter.get("/adminapi/news/list", NewsController.getList);

module.exports = NewsRouter;
