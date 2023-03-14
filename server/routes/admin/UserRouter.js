var express = require('express');
var UserRouter = express.Router();
const UserController = require('../../controllers/admin/UserController')

UserRouter.post("/adminapi/user/login", UserController.login)
UserRouter.get("/adminapi/user/home", (req, res) => {
    res.send({ ok: 1 });
})

module.exports = UserRouter;
