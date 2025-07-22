import express from 'express';

import addCategory from '../controllers/category/create.js'
import getAllCategories from '../controllers/category/fetch.js';
import getCategoryById from '../controllers/category/getById.js';
import updateCategory from '../controllers/category/update.js';
import deleteCategory from '../controllers/category/delete.js';

const router = express.Router();

router.post('/addCategory', addCategory);
router.get('/getAllCategories', getAllCategories);
router.get('/getCategory/:id', getCategoryById);
router.put('/updateCategory/:id', updateCategory);
router.delete('/deleteCategory/:id', deleteCategory);

export default router;