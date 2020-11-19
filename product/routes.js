const router = require('express').Router();
const {
	getList,
	addItem,
	uploadImage,
	deleteItem
} = require('./controller');


router.get('/', getList);
router.post('/add', addItem);
router.post('/upload', uploadImage);
router.get('/delete/:id', deleteItem);

module.exports = router;