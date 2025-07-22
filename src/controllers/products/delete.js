import deleteProduct from '../../services/products/delete.js';

const deleteProductController = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const deleted_Product = await deleteProduct(productId);
    if (deleted_Product === null) {
      return res.status(404).json({
        success: false,
        messsage: "Product not found or deletion failed"
      })
    }
    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: deleted_Product
    })
  }
  catch (error) {
    console.log("Error in deleting product controller", error);
    return res.status(500).jspn({
      success: false,
      message: "Internal Server Error"
    })
  }
}

export default deleteProductController