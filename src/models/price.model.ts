import { Product } from "./product.model";
import { User } from "./user.model";

export interface Price{
    _id: string;
    userId: string,
    productId: string;
    precio: number,
    createdAt?: string,
    updatedAt?: string
}

export interface PriceResponse{
    _id: string;
    userId: User,
    productId: Product;
    precio: number,
    createdAt?: string,
    updatedAt?: string
}