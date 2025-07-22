import { PrismaClient } from '@prisma/client'
const primsa = new PrismaClient();

const deleteProduct = async (productId) => {
  try {
    const productCheck = await primsa.product.findUnique({
      where: {
        id: productId
      }
    })
    if (!productCheck) {
      console.log('Product not found with ID:', productId);
      return null;
    }
    const deleted_product = await primsa.product.delete({
      where: {
        id: productId
      }
    })
    if (deleted_product) {
      console.log('Product deleted successfully:', deleted_product);
      return deleted_product;
    }
    return null;
  }
  catch (error) {
    console.log('Error deleting product:', error);
    return null;
  }
}

export default deleteProduct