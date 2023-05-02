import { useQuery } from "@tanstack/react-query";
import {
  FilterOption,
  getProducts,
  SortOption,
} from "../../api/routes/products";

const GET_PRODUCTS_KEY = "GET_PRODUCTS";

export const useGetProducts = ({
  pageParam,
  sortOption,
  filterOption,
  search,
}: {
  pageParam?: number;
  sortOption: SortOption;
  filterOption?: FilterOption;
  search?: string;
}) => {
  const getProductsQuery = useQuery(
    [GET_PRODUCTS_KEY, pageParam, sortOption, filterOption, search],
    () => getProducts(pageParam, sortOption, filterOption, search)
  );

  return { ...getProductsQuery };
};
