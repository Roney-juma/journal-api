const express =require("express")

const categories = require("./category.route")
const journal = require("./journal.route")
const users = require("./users.route")

const router = express.Router()


router.use("/category", categories)
router.use("/journal", journal)
router.use("/users", users)

module.exports  = router