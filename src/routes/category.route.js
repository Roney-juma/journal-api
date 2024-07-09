const express = require("express");
const categoryController = require("../controllers/categories.controller")


const router = express.Router();



router.get('/',categoryController.getCategory)
router.post('/create',categoryController.createCategory)
router.patch('/update/:id',categoryController.updateCategory)
router.delete('/delete/:id',categoryController.deleteCategory)

module.exports = router;