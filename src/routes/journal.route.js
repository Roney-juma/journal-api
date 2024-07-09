const express = require("express");
const journalController = require("../controllers/journal.controller")


const router = express.Router();



router.get('/',journalController.getJournals)
router.get('/create',journalController.createJournal)
router.get('/update/:id',journalController.updateJournal)
router.get('/delete/:id',journalController.deleteJournalById)

module.exports = router;