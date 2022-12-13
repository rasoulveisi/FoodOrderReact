import Card from "../UI/Card";
import classes from "./ProductsAvailable.module.css";
import ProductsItems from "./ProductsItems/ProductsItems";
import React, { useEffect, useState } from "react";

const ProductsAvailable = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics?limit=5"
      );

      if (!response.ok) throw new Error("Something went wrong!!");

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
      setIsLoading(false);
    };
    fetchProducts().catch((e) => {
      setIsLoading(false);
      setError(e.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.error}>
        <p>{error}</p>
      </section>
    );
  }

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
