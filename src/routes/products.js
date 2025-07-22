import expresss from 'express';
import createProduct from '../controllers/products/create.js'
import getProducts from '../controllers/products/fetch.js';
import updateProduct from '../controllers/products/update.js';
import deleteProduct from '../controllers/products/delete.js';
import getProductById from '../controllers/products/getById.js';

const router = expresss.Router();

router.post('/create' , createProduct);
router.get('/fetch' , getProducts);
router.get('/fetch/:id' , getProductById); 
router.put('/update/:id' , updateProduct);
router.delete('/delete/:id' , deleteProduct)


export default router;