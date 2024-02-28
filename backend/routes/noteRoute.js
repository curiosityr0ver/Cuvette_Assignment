const express = require("express");
const router = express.Router();
const { createNote, allNotes, allGroupNotes, updateNote, deleteNote } = require('../controller/noteController');


router.post('/', createNote);
router.get('/', allNotes);
router.get('/:group', allGroupNotes);

router.put('/', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;    