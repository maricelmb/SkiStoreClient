import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Product } from "../../app/models/product";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>();

  useEffect(() => {
    fetch(`https://localhost:7269/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  return <div>{product?.name}</div>;
}
