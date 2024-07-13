const authorController = require("../controllers/authorController");

const router = require("express").Router();

// ADD Author

router.post("/", authorController.addAuthor);

module.exports = router;

// GET ALL AUTHORS
router.get("/", authorController.getAllAuthors);

// GET AN AUTHOR
router.get("/:id", authorController.getAnAuthor);

// UPDATE AN AUTHOR
router.put("/:id", authorController.updateAnAuthor);

// DELETE AUTHOR
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;
