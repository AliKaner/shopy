import DetailedProductCard from "../../components/DetailedProductCard";
import { Layout } from "../../components/Layout";
import { useDetail } from "../../contexts/detail";

export default function DetailPage() {
  const { product } = useDetail();

  if (!product) {
    return <div>Loading...</div>; // or handle the case where product is undefined
  }
  
  return (
    <Layout>
      <DetailedProductCard product={product} />
    </Layout>
  );
}
