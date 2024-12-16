import ITBook from "../../src/02-visao-geral-esmascript/ITBook";

describe("02 - Visão Geral ECMASCRIPT: Class ITBook", () => {
   it("printTecnology", () => {
      const book = new ITBook("Estrutura de Dados", 420, true, "JavaScript");

      expect(book.printTecnology()).toBe("JavaScript");
   });
});
