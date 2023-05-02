import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/routes/products";
import { IProduct } from "../../api/models/IProduct";

const CACHE_PRODUCTS_KEY = "CACHE_PRODUCTS";

function onlyUnique(value: unknown, index: number, array: unknown[]) {
  return array.indexOf(value) === index;
}

export const useCacheProducts = () => {
  const { data, isLoading: cacheIsLoading } = useQuery<IProduct[]>(
    [CACHE_PRODUCTS_KEY],
    () => getProducts(),
    {
      cacheTime: 600,
      staleTime: 600,
    }
  );

  const brands = (data ?? []).map(({ brand }) => brand).filter(onlyUnique);
  const models = (data ?? []).map(({ model }) => model).filter(onlyUnique);

  return { cacheIsLoading, brands, models};
};
