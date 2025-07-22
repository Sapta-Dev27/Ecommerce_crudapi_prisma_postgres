import deleteCategory from "../../services/category/delete.js";

const deleteCategoryController = async (req, res) => {
  try {
    const cat_id = parseInt(req.params.id);
    const deleted_Category = await deleteCategory(cat_id);
    if (deleted_Category === null) {
      return res.status(404).json({
        success: false,
        message: "Category not found or deletion failed"
      })
    }
    return res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      data: deleted_Category
    })
  }
  catch (error) {
    console.log("Error in delete category controller", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}

export default deleteCategoryController