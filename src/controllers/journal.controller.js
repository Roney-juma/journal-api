const Journal = require('../models/journal.model');

// Get all journal entries
const getJournals = async (req, res) => {
    try {
        const journals = await Journal.find();
        res.json(journals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single journal entry by ID
const getJournalById = async (req, res) => {
    try {
        const journal = await Journal.findById(req.params.id);
        if (journal == null) {
            return res.status(404).json({ message: 'Cannot find journal entry' });
        }
        res.json(journal);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new journal entry
const createJournal = async (req, res) => {
    const journal = new Journal({
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags,
        mood: req.body.mood,
    });
    try {
        const newJournal = await journal.save();
        res.status(201).json(newJournal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a journal entry
const updateJournal = async (req, res) => {
    try {
        const journal = await Journal.findById(req.params.id);
        if (journal == null) {
            return res.status(404).json({ message: 'Cannot find journal entry' });
        }

        if (req.body.title != null) {
            journal.title = req.body.title;
        }
        if (req.body.content != null) {
            journal.content = req.body.content;
        }
        if (req.body.tags != null) {
            journal.tags = req.body.tags;
        }
        if (req.body.mood != null) {
            journal.mood = req.body.mood;
        }

        const updatedJournal = await journal.save();
        res.json(updatedJournal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a journal entry
const deleteJournalById = async (req, res) => {
    try {
        const journal = await Journal.findById(req.params.id);
        if (journal == null) {
            return res.status(404).json({ message: 'Cannot find journal entry' });
        }

        await journal.remove();
        res.json({ message: 'Journal entry deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
  getJournals,
  createJournal,
  updateJournal,
  getJournalById,
  deleteJournalById
};
