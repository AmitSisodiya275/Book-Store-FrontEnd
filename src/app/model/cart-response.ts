import { CartItems } from "./car-items";


export class CartResponse {
    cartItems: CartItems[] = [];
    totalCartQuantity : number;
}