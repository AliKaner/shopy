import { IProduct } from "../../models/IProduct";
import { API_ROOT } from "../../../shared/constants";

export type SortOption = "price" | "-price" | "createdAt" | "-createdAt";

export interface FilterOption {
  brand?: string[];
  model?: string[];
}

export const getProducts = async (
  pageParam: number = 1,
  sortOption?: SortOption,
  filterOption?: FilterOption
): Promise<IProduct[]> => {
  const url = buildUrl(pageParam, sortOption, filterOption);

  const res = await fetch(url.href);
  return await res.json();
};

export const getProductById = async (id: string): Promise<IProduct> => {
  const url = `${API_ROOT}/${id}`;

  const res = await fetch(url);
  return await res.json();
};

export const getFiltersSet = async (filter:string): Promise<string[]> => {
  const url = API_ROOT;
  const res = await fetch(url);
  const products = await res.json();
  const models = products.map((product: { filter: string; }) => filter);
  return models;
};


export const buildUrl = (
  pageParam: number,
  sortOption?: SortOption,
  filterOption?: FilterOption,
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
    url.searchParams.append("sortBy", sortOption);
  }
  
  url.searchParams.append("per_page", "12");
  url.searchParams.append("page", pageParam.toString());

  return url;
};


