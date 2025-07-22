import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const createProduct = async (productname, productdesc, productPrice, productStatus, categoryId) => {
  try {
    const addproduct = await prisma.product.create({
      data: {
        product_name: productname,
        product_description: productdesc,
        price: productPrice,
        available: productStatus,
        category: {
          connect: {
            id: categoryId
          }
        }
      }
    })
    if( addproduct) {
      console.log('Product created successfully:', addproduct);
      return addproduct;
    }
    return null ;
  }
  catch (error) {
    console.log('Error creating product:', error);
  }
}

export default createProduct;