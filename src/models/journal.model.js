// models/Journal.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    tags: [String],
    mood: {
        type: String,
        enum: ['Happy', 'Sad', 'Neutral', 'Excited', 'Angry'],
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
});

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;
