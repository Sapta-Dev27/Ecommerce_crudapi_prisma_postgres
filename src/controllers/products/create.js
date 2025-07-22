import createProduct from '../../services/products/create.js';

const createProductController = async (req, res) => {
  try {
    const { productname, productdesc, productPrice, productStatus, categoryId } = req.body;
    if (!productname || !productdesc || !productdesc || !productPrice || !productStatus || !categoryId) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      })
    }
    const newProduct = await createProduct(productname, productdesc, productPrice, productStatus, categoryId);
    if (newProduct === null) {
      return res.status(400).json({
        success: false,
        message: 'Product creation failed'
      })
    }
    return res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: newProduct
    })
  }
  catch (error) {
    console.log('Error in createProductController:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    })

  }
}

export default createProductController;