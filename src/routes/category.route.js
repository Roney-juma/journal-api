const express = require("express");
const categoryController = require("../controllers/categories.controller")


const router = express.Router();



router.get('/',categoryController.getCategory)
router.get('/create',categoryController.createCategory)
router.get('/update/:id',categoryController.updateCategory)
router.get('/delete/:id',categoryController.deleteCategory)

module.exports = router;