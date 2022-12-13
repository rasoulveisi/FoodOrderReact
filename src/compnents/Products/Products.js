import ProductsAvailable from "./ProductsAvailable";
import ProductsSummary from "./ProductsSummary";

const Products = (props) => {
  return (
    <>
      <ProductsSummary />
      <ProductsAvailable />
    </>
  );
};

export default Products;
