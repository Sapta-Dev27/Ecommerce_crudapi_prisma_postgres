import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createCategory = async (name) => {
  try {
    const addcategory = await prisma.Category.create({
      data: {
        category_name: name
      }
    })
    if (addcategory) {
      console.log("Category added successfully");
      return addcategory;
    }
    return null;
  }
  catch (error) {
    console.log("Error in creatinh the category", error);
  }
}

export default createCategory;