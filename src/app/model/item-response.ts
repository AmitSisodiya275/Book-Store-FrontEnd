import { BookDetails } from "./book-details";

export class ItemResponse{
    public books: BookDetails[] = [];
    public itemsQuantity:number | undefined;
}