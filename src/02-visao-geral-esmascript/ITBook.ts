import Book from "./Book";

class ITBook extends Book {
   public tecnology: string;

   constructor(title: string, pages: number, isbn: boolean, tecnology: string) {
      super(title, pages, isbn);
      this.tecnology = tecnology;
   }

   printTecnology() {
      return this.tecnology;
   }
}

export default ITBook;
