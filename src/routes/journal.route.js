const express = require("express");
const journalController = require("../controllers/journal.controller")


const router = express.Router();



router.get('/',journalController.getJournals)
router.post('/create',journalController.createJournal)
router.patch('/update/:id',journalController.updateJournal)
router.delete('/delete/:id',journalController.deleteJournalById)

module.exports = router;