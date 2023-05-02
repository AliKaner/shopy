import { IProduct } from "../../models/IProduct";
import { API_ROOT } from "../../../shared/constants";

export type SortOption = "price" | "-price" | "createdAt" | "-createdAt";

export interface FilterOption {
  brand?: string[];
  model?: string[];
}

export const getProducts = async (
  pageParam?: number,
  sortOption?: SortOption,
  filterOption?: FilterOption,
  search?: string
): Promise<IProduct[]> => {
  const url = buildUrl(pageParam, sortOption, filterOption, search);

  const res = await fetch(url.href);
  return await res.json();
};

export const getProductById = async (id: string): Promise<IProduct> => {
  const url = `${API_ROOT}/${id}`;

  const res = await fetch(url);
  return await res.json();
};

export const buildUrl = (
  pageParam?: number,
  sortOption?: SortOption,
  filterOption?: FilterOption,
  search?: string
): URL => {
  const url = new URL(API_ROOT);

  if (filterOption && filterOption.brand?.length) {
    const brandFilters = filterOption.brand.join("|");
    url.searchParams.append("brand", brandFilters);
  }

  if (filterOption && filterOption.model?.length) {
    const modelFilters = filterOption.model.join("|");
    url.searchParams.append("model", modelFilters);
  }

  if (sortOption) {
    const order = sortOption[0] === "-" ? "desc" : "asc";
    const sortBy = sortOption[0] === "-" ? sortOption.substring(1) : sortOption;
    url.searchParams.append("sortBy", sortBy);
    url.searchParams.append("order", order);
  }

  if (pageParam) {
    url.searchParams.append("page", pageParam.toString());
  }
  url.searchParams.append("limit", "12");
  if (search) {
    url.searchParams.append("search", search);
  }

  return url;
};
