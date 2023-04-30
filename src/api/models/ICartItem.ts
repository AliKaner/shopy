import { IProduct } from "./IProduct";

export type ICartItem = {
    id:string;
    product:IProduct;
    quantity:number;
}