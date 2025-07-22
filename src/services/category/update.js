import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const updateCategory = async (cat_id, cat_name) => {
  try {
    const checkCategory = await prisma.category.findUnique({
      where : {
        id: cat_id
      }
    })
    if (!checkCategory) {
      console.log("Category not found");
      return null;
    }
    const updatedCategory = await prisma.category.update({
      data: {
        category_name: cat_name
      },
      where: {
        id: cat_id
      }
    })
    if (updatedCategory) {
      console.log("Category updated successfully");
      return updatedCategory
    }
    return null;
  }
  catch (error) {
    console.log("Error in updating category", error);
  }
}

export default updateCategory;