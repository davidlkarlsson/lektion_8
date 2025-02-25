import { useEffect, useState } from "react";
import { ProductCard } from "~/components/ProductCard";
import type { Product } from "~/interfaces/Product";

/* 

TODO - #1 Typescript support
      #2 Display products in a view


*/

export function Welcome() {
  const [productList, setProductList] = useState<Product[]>([
    {
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: undefined,
      rating: {
        rate: 0,
        count: 0,
      },
    },
  ]);

  // on component creation
  useEffect(() => {
    console.log("Created - Hello World!");

    // Fetch
    async function fetchData() {
      const result = await fetch("https://fakestoreapi.com/products");
      const products: Product[] = await result.json();
      console.log("Produkt: " + products[0].title);

      setProductList(products);
    }

    fetchData();
  }, []);

  return (
    <div>
      {productList.map(
        ({ id, title, price, description, category, image, rating }) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        )
      )}
    </div>
  );
}
