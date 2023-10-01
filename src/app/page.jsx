import "bootstrap/dist/css/bootstrap.css"
import TableComponent from "../components/TableComponent";
import { prisma } from "@/libs/prisma";

async function getProducts() {
  const products = await prisma.product.findMany();
  console.log(products);
  return products;
}

async function HomePage() {

  const products = await getProducts();

  return(
    <div className="container mt-5">
      <h1 className="my-4">Tabla de productos</h1>
      
      <TableComponent data={products} />
    </div>
  );
}

export default HomePage;