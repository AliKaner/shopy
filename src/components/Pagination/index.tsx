import { FC } from "react";
import { IPagination } from "./pagination.type";
import Pagination from '@mui/material/Pagination';

const ProductPagination: FC<IPagination> = ({ count, onClick }) => {
  return (
    <>
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        onClick={onClick}
      />
    </>
  );
};

export default ProductPagination;
