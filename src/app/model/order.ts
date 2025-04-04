import { BookDetails } from "./book-details";
import { Cart } from "./cart";
import { User } from "./user";

export class Order{
    orderId!:number;
    user: User | undefined;
    // cart: Cart | undefined;
    placedAt:Date | undefined;
    totalPrice:number | undefined;
    books:BookDetails[] | undefined;
}