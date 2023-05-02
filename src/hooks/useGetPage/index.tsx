import { useQuery } from "@tanstack/react-query";
import {
  FilterOption,
  getProducts,
  SortOption,
} from "../../api/routes/products";
import { IProduct } from "../../api/models/IProduct";

const GET_PAGE_KEY = "GET_PAGE";

export const useGetPages = ({
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
  const { data, isLoading: cacheIsLoading } = useQuery<IProduct[]>(
    [GET_PAGE_KEY, pageParam, sortOption, filterOption, search],
    () => getProducts(pageParam, sortOption, filterOption, search)
  );

  const totalPagesCount=  Number(Math.ceil(Number(data?.length) / 12));
  return {totalPagesCount}
};
