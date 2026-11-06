// We want the router to be as thin as possible
// Communication between routes and business logic was delegated to the controllers

const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');
const supportController = require('./controllers/supportController');
const testController = require('./controllers/testController');

router.get('/', homeController.loadHome);

router.get('/support', supportController.loadSupport);

router.post('/support', supportController.postSupport);

// : = Param  | ?eg=value&eg2=value2 = Query
//                                        ╔ Old syntax is simply ':optionalParam?' with no brackets
router.get('/test/:mandatoryId/:mandatoryMsg{/:optionalParam}', testController.loadTestPage);

module.exports = router;