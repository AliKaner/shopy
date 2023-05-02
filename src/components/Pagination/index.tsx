import { FC } from "react";
import { IPagination } from "./pagination.type";
import Pagination from "@mui/material/Pagination";

const ProductPagination: FC<IPagination> = ({ count, onChange }) => {
  return (
    <>
      <Pagination
        sx={{ margin: "auto" }}
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={onChange}
        siblingCount={0}
        boundaryCount={1}
      />
    </>
  );
};

export default ProductPagination;
