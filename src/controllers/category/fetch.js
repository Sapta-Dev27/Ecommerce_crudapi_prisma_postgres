import fetchAllCategories from "../../services/category/fetch.js";

const fetchAllCategoriesController = async (req, res) => {
  try {
    const categories = await fetchAllCategories();
    if (categories === null) {
      return res.status(404).json({
        success: false,
        message: "No categories found"
      })
    }
    return res.status(200).json({
      success: true,
      message: "Categories fetched successfully",
      data: categories
    })
  }
  catch (error) {
    console.log("Error in fetching all categories controller", error);
    return res.status(500).json({
      success: false
    })
  }
}

export default fetchAllCategoriesController;