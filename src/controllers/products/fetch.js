import fetchAllProducts from '../../services/products/fetch.js';

const fetchAllProductsController = async (req, res) => {
  try {
    const fetchProducts = await fetchAllProducts();
    if (fetchProducts === null) {
      return res.status(404).json({
        success: false,
        message: "No products found"
      })
    }
    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: fetchProducts
    })
  }
  catch (error) {
    console.log("Error in fetching all products controller", error);
    returnnres.status(500).json({
      success: false,
      message: "Internal Server Error"

    })
  }
}

export default fetchAllProductsController