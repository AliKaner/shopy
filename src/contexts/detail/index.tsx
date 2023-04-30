import { ReactNode, createContext, FC, useState, useContext } from "react";
import { IProduct } from "../../api/models/IProduct";

interface IDetailContext {
  product?: IProduct;
  setProduct: React.Dispatch<React.SetStateAction<IProduct | undefined>>;
}

interface IDetailProvider {
  children: ReactNode;
}

const DetailContext = createContext<IDetailContext>({} as IDetailContext);

export const DetailProvider: FC<IDetailProvider> = ({ children }) => {
  const [product,setProduct] = useState<IProduct>();

  return (
    <DetailContext.Provider value={{ product,setProduct }}>
      {children}
    </DetailContext.Provider>
  );
};

export const useDetail = () => useContext(DetailContext);
