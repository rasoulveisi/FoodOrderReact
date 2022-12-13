import Card from "../UI/Card";
import classes from "./ProductsAvailable.module.css";
import ProductsItems from "./ProductsItems/ProductsItems";
import React, { useEffect, useState } from "react";

const ProductsAvailable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics?limit=5"
      );

      const data = await response.json();

      const loadedProducts = [];

      for (const key in data) {
        loadedProducts.push({
          id: key,
          name: data[key].title,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setProducts(loadedProducts);
    };
    fetchProducts();
  }, []);

  const productsList = products.map((product) => (
    <ProductsItems
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));

  return (
    <section className={classes.products}>
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  );
};

export default ProductsAvailable;
