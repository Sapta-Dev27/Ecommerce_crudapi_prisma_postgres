import createCategory from "../../services/category/create.js";

const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await createCategory(name);
    if (newCategory === null) {
      return res.status(400).json({
        success: false,
        message: "Category creation failed"
      })
    }
    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: newCategory
    })
  }
  catch (error) {
    console.log("Error in create category controller", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}

export default createCategoryController