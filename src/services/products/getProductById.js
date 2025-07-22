import { PrismaClient } from '@prisma/client'
const primsa = new PrismaClient();

const getProductById = async (productId) => {
  try {
    const product = await primsa.product.findUnique({
      where: {
        id: productId
      }
    })
    if (!product) {
      console.log('Product not found with ID:', productId);
      return null;
    }
    console.log('Product fetched successfully:', product);
    return product;
  }
  catch (error) {
    console.log('Error fetching product by ID:', error);
  }
}

export default getProductById