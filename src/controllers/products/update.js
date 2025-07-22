import updateProduct from '../../services/products/update.js'

const updateProductController = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const { updated_title, updated_desc, updated_price, updated_avail, } = req.body;
    const updated_product = await updateProduct(updated_title, updated_desc, updated_price, updated_avail,);
    if (updated_product === null) {
      return res.status(404).json({
        success: false,
        message: "Product not found or update failed"
      })
    }
    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updated_product
    })
  }
  catch (error) {
    console.log("Error in updating product controller", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}

export default updateProductController