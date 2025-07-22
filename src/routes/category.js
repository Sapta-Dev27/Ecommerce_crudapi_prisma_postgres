import express from 'express';

import addCategory from '../controllers/category/create.js'
import getAllCategories from '../controllers/category/fetch.js';
import getCategoryById from '../controllers/category/getById.js';
import updateCategory from '../controllers/category/update.js';
import deleteCategory from '../controllers/category/delete.js';

const router = express.Router();

router.post('/create', addCategory);
router.get('/fetch', getAllCategories);
router.get('/fetch/:id', getCategoryById);
router.put('/update/:id', updateCategory);
router.delete('/delete/:id', deleteCategory);

export default router;