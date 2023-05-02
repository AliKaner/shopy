import { useState, useEffect, ChangeEvent, SetStateAction } from "react";
import {
  FilterOption,
  SortOption,
  getProducts,
} from "../../api/routes/products";
import { Layout } from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import { Box, Grid, Pagination, Skeleton } from "@mui/material";
import FilterForm from "../../components/FilterForm";
import { SortRadio } from "../../components/SortRadio";
import { useGetProducts } from "../../hooks/useGetItems";
import { useCacheProducts } from "../../hooks/useCacheProducts";
import ProductPagination from "../../components/Pagination";
import { useGetPages } from "../../hooks/useGetPage";

export default function ListPage() {
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<SortOption>("-createdAt");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>();

  const { data, isLoading } = useGetProducts({
    pageParam: page,
    sortOption: sort,
    filterOption: {
      brand: selectedBrands,
      model: selectedModels,
    },
    search: searchText,
  });

  const { totalPagesCount } = useGetPages({
    sortOption: sort,
    filterOption: {
      brand: selectedBrands,
      model: selectedModels,
    },
    search: searchText,
  });

  const { cacheIsLoading, models, brands } = useCacheProducts();

  const onPaginationClickHandle = (
    e: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
  };
  const onBrandFormChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedBrands([...selectedBrands, e.target.value]);
    } else {
      setSelectedBrands(
        selectedBrands.filter((brand) => e.target.value !== brand)
      );
    }
  };
  const onModelFormChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedModels([...selectedModels, e.target.value]);
    } else {
      setSelectedModels(
        selectedModels.filter((model) => e.target.value !== model)
      );
    }
  };

  const onSearchChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const onSortRadioChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value as SetStateAction<SortOption>);
  };

  return (
    <Layout onChange={onSearchChange}>
      <>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "flex-end",
              flex: 1,
              flexFlow: "column wrap",
            }}
          >
            <SortRadio onChange={onSortRadioChangeHandle} />
            <FilterForm
              id={"brand"}
              title={"Brand"}
              checked={selectedBrands}
              options={brands}
              isLoading={cacheIsLoading}
              onCheckedChange={onBrandFormChangeHandle}
            />
            <FilterForm
              id={"model"}
              title={"Model"}
              checked={selectedModels}
              options={models}
              isLoading={cacheIsLoading}
              onCheckedChange={onModelFormChangeHandle}
            />
          </Box>
          <Box sx={{ flexGrow: 1, flex: 2 }}>
            <Grid
              container
              spacing={1}
              columns={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 4 }}
            >
              {isLoading
                ? [...Array(12)].map(() => (
                    <Skeleton
                      variant="rectangular"
                      width={210}
                      height={320}
                      sx={{ margin: 1 }}
                    />
                  ))
                : data?.map((product) => (
                    <Grid xs={1}>
                      <ProductCard product={product} />
                    </Grid>
                  ))}
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ProductPagination
                count={totalPagesCount}
                onChange={onPaginationClickHandle}
              />
            </Box>
          </Box>
        </Box>
      </>
    </Layout>
  );
}
