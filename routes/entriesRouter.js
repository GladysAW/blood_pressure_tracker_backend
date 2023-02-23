const express = require("express");
const router = express.Router();

const {
  getAllEntries,
  addEntry,
  getEntryById,
  deleteEntryById,
  // deleteAllEntries,
  updateEntryByID,
} = require("../controllers/EntriesController");

router.route("/").get(getAllEntries).post(addEntry);
router
  .route("/:id")
  .get(getEntryById)
  .delete(deleteEntryById)
  .put(updateEntryByID);

module.exports = router;
