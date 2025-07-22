import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getCategoryById = async (cat_id) => {
  try {
    const getbyId = await prisma.category.findUnique({
      id: cat_id
    })
    if (getbyId) {
      console.log("Category fetched successfully by ID");
      return getbyId;
    }
    return null;
  }
  catch (error) {
    console.log("Error in fetching category by ID", error);
  }
}


export default getCategoryById;