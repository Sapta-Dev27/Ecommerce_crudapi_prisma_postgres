import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const deleteCategory = async (cat_id) => {
  try {
    const checkCategory = await prisma.category.findUnique({
      where: {
        id: cat_id
      }
    })
    if (!checkCategory) {
      console.log("Category not found");
      return null;
    }
    const deletedCategory = await prisma.category.delete({
      where: {
        id: cat_id
      }
    })
    if (deletedCategory) {
      console.log("Category deleted successfully");
      return deletedCategory;
    }
    return null;
  }
  catch (error) {
    console.log("Error in deleting category", error);
  }
}

export default deleteCategory