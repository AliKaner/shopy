import { useParams } from "react-router-dom";
import DetailedProductCard from "../../components/DetailedProductCard";
import { Layout } from "../../components/Layout";
import { useDetail } from "../../contexts/detail";
import { IProduct } from "../../api/models/IProduct";
import { useEffect, useState } from "react";
import { getProductById } from "../../api/routes/products";

export default function DetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();

  const getProduct = async () => {
    const currentProduct = await getProductById(id as string);
    setProduct(currentProduct);
  };
  useEffect(() => {
   getProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // or handle the case where product is undefined
  }

  return (
    <Layout>
      <DetailedProductCard product={product} />
    </Layout>
  );
}
