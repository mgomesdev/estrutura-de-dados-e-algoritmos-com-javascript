import Set from "../../src/07-conjuntos/Set";

describe("Set: Conjuntos", () => {
   it("Deve criar uma instancia da classe Set", () => {
      const set = new Set();
      expect(set).toBeInstanceOf(Set);
   });

   it("add(element): adiciona um novo element ao conjunto", () => {
      const set = new Set();

      const add = set.add(7);
      const add2 = set.add(7);

      expect(set.hasElement(7)).toBeTruthy();
      expect(add).toBeTruthy();
      expect(add2).toBeFalsy();
   });

   it("delete(element): remove element do conjunto", () => {
      const set = new Set();

      set.add(7);
      set.add(8);
      set.delete(7);

      expect(set.hasElement(7)).toBeFalsy();
   });

   describe("has(element): devolve true se element estiver no conjunto, e false caso contrário.", () => {
      const set = new Set();

      it("Devolve false se não estiver no conjunto", () => {
         expect(set.hasElement(2)).toBeFalsy();
      });

      it.todo("Devolve true se element estiver no conjunto");
   });

   it.todo("clear(): remove todos os elementos do conjunto");

   it.todo(
      "size(): devolve quantos elementos estão contidos no conjunto. É semelhante á propriedade length de um array."
   );

   it.todo("values(): devolve um array com todos os valores (elementos) que estão no conjunto.");
});
