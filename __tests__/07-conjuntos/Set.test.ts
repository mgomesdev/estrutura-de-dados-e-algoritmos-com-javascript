import Set from "../../src/07-conjuntos/Set";

describe("Set: Conjuntos", () => {
   it("Deve criar uma instancia da classe Set", () => {
      const set = new Set();
      expect(set).toBeInstanceOf(Set);
   });

   it.todo("add(element): adiciona um novo element ao conjunto");

   it.todo("delete(element): remove element do conjunto");

   it.todo("has(element): devolve true se element estiver no conjunto, e false caso contrário.");

   it.todo("clear(): remove todos os elementos do conjunto");

   it.todo(
      "size(): devolve quantos elementos estão contidos no conjunto. É semelhante á propriedade length de um array."
   );

   it.todo("values(): devolve um array com todos os valores (elementos) que estão no conjunto.");
});
