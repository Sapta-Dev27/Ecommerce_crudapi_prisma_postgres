import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const fetchAllCategories = async () => {
  try {
    const categories = await prisma.category.findMany();
    if(categories.length > 0 ) {
      console.log("Categories fetched successfully");
      return categories;
    }
    return null;
  }
  catch (error) {
    console.log('Error in fetching categories', error)
  }
}

export default fetchAllCategories