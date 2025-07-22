import getProductById from "../../services/products/getProductById.js"


const getProductByIdController = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const getproduct_byid = await getProductById(productId);
    if (getproduct_byid === null) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      })
    }
    return res.status(200).json({
      success: true,
      message: "Product fetched successfully by ID",
      data: getproduct_byid
    })
  }
  catch (error) {
    console.log("Error in fetching product by ID controller", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}

export default getProductByIdController