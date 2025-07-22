import getCategoryById from "../../services/category/getById.js";

const getCategoryByIdController = async (req, res) => {
  try {
    const cat_id = parseInt(req.params.id)
    const category_byid = await getCategoryById(cat_id);
    if (category_byid === null) {
      return res.status(404).json({
        success: false,
        message: "Category not found"
      })
    }
    return res.status(200).json({
      success: true,
      message: "Category fetched successfully by ID",
    })
  }
  catch (error) {
    console.log("Error in fetching category by ID controller", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}

export default getCategoryByIdController