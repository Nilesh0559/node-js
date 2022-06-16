const express = require("express");
const tasksHandler = require("./../controllers/tasks");
const router = express.Router();

router.get("/", tasksHandler.getAllTasks);
router.post("/", tasksHandler.createTask);
router.get("/:id", tasksHandler.getTask);
router.patch("/:id", tasksHandler.updateTask);
router.delete("/:id", tasksHandler.deleteTask);

module.exports = router;
