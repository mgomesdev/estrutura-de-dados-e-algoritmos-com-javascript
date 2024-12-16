export default class Book {
   public title: string;
   public pages: number;
   public isbn: boolean;

   constructor(title: string, pages: number, isbn: boolean) {
      this.title = title;
      this.pages = pages;
      this.isbn = isbn;
   }

   printIsbn() {
      return this.isbn;
   }
}
