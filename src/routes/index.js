// const customer = require("./customer")
// const express = require("express")

// const routerMain = express.Router()

// routerMain.use("/customer", customer)

// module.exports = routerMain;

const customer = require("./customer")
const express =require("express")
const router = express.Router()


router.use("/customer", customer)
module.exports  = router