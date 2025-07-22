import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient() ;

const fetchProducts = async() => {
  try {
    const products = await prisma.product.findMany();
    if(products && products.length > 0 ) {
      console.log('Products fetched successfully:', products);
      return products ;
    }
    return null ;
  }
  catch(error) {
    console.log('Error fetching products:', error);
  }
}

export default fetchProducts;