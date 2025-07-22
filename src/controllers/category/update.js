import updateCategory from "../../services/category/update.js";

const updateCategoryController = async (req, res) => {
  try {
    console.log(req.body);
    const {cat_name} = req.body;
    const cat_id = parseInt(req.params.id);
    const updated_Category = await updateCategory(cat_id, cat_name);
    if (updated_Category === null) {
      return res.status(404).json({
        success: false,
        message: "Category not found or update failed"
      })
    }
    return res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: updated_Category
    })
  }
  catch (error) {
    console.log("Error in updating category controller", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}

export default updateCategoryController;