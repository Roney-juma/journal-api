const express =require("express")

const customer = require("./customer")
const claims = require("./claim.route")
const users = require("./users.route")

const router = express.Router()


router.use("/customers", customer)
router.use("/claims", claims)
router.use("/users", users)

module.exports  = router