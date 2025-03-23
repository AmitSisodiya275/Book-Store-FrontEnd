export class BookDetails {
    availableBookQuantity!: number;
    bookAuthor: string | undefined;
    bookDescription: string | undefined;
    bookId!: number;
    bookImages: string | undefined;
    bookName: string | undefined;
    bookPrice: any;
    originalPrice : any;
    bookRating: any | undefined;
    inCartQuantity!: number;
}