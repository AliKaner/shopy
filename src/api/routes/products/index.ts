import { IProduct } from "../../models/IProduct";

type SortOption = "price" | "-price" | "createdAt" | "-createdAt";

interface FilterOption {
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


const buildUrl = (
    pageParam: number,
    sortOption?: SortOption,
    filterOption?: FilterOption
  ): URL => {
    const url = new URL("https://5fc9346b2af77700165ae514.mockapi.io/products");
  
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