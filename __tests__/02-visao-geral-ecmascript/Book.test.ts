import Book from "../../src/02-visao-geral-esmascript/Book";

describe("02 - Visão Geral Ecmascript: Class Book", () => {
   it("printIsBn", () => {
      const book = new Book("Estrutura de Dados", 420, true);

      expect(book.printIsbn()).toBeTruthy();
   });
});
