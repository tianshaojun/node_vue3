var express = require('express');
var NewsRouter = express.Router();
const NewsController = require('../../controllers/admin/NewsController');

//图片上传
const multer = require('multer');
const upload = multer({ dest: 'public/newsuploads/' });

//涉及文件上传,普通post不行,需要加上multer中间件
NewsRouter.post("/adminapi/news/add", upload.single('file'), NewsController.add);
NewsRouter.get("/adminapi/news/list", NewsController.getList);
NewsRouter.post("/adminapi/news/list", upload.single("file"), NewsController.updateList);
NewsRouter.get("/adminapi/news/list/:id", NewsController.getList);
NewsRouter.delete("/adminapi/news/list/:id", NewsController.delList);
NewsRouter.put("/adminapi/news/publish", NewsController.publish);

module.exports = NewsRouter;
