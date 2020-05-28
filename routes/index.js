const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
const addTaskController = require('../controllers/add_task_controller');


router.get("/",homeController.home);

router.all("/add-task",addTaskController.addTask);

module.exports = router;