import { IProduct } from "./Product";

export interface ICartContextType {
    items: IProduct[],
    addItemToCart: (item: IProduct) => void,
    removeItemFromCart: (id: number) => void,
    emptyCart: () => void,
    countItems: (id: number) => number,
};