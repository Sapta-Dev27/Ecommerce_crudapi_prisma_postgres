import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const updateProduct = async (updated_title, updated_desc, updated_price, updated_avail, productid) => {
  try {
    const productCheck = await prisma.product.findUnique({
      where: {
        id: productid
      }
    })
    if (!productCheck) {
      console.log('Product not found with ID:', productid);
      return null;
    }
    const updated_product = await prisma.product.update({
      where: {
        id: productid
      },
      data: {
        product_name: updated_title,
        product_description: updated_desc,
        price: updated_price,
        available: updated_avail,
      }
    })
    if (updated_product) {
      console.log('Product updated successfully:', updated_product);
      return updated_product;
    }
    return null;
  }
  catch (error) {
    console.log('Error updating product:', error);
    return nyll;
  }
}

export default updateProduct;