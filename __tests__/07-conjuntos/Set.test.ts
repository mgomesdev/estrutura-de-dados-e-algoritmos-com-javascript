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

      set.add(3);

      it("Devolve false se não estiver no conjunto", () => {
         expect(set.hasElement(2)).toBeFalsy();
      });

      it("Devolve true se element estiver no conjunto", () => {
         expect(set.hasElement(3)).toBeTruthy();
      });
   });

   it("clear(): remove todos os elementos do conjunto", () => {
      const set = new Set();

      set.add(7);
      set.clear();

      expect(set.hasElement(7)).toBeFalsy();
   });

   it("size(): devolve quantos elementos estão contidos no conjunto. É semelhante á propriedade length de um array.", () => {
      const set = new Set();

      set.add(7);
      set.add(8);

      expect(set.size()).toBe(2);
   });

   it("values(): devolve um array com todos os valores (elementos) que estão no conjunto.", () => {
      const set = new Set();

      set.add(3);
      set.add(7);
      set.add(12);

      expect(set.values()).toEqual([3, 7, 12]);
   });

   it("União: dados dois conjuntos, devolve um novo conjunto com elementos dos dois conjuntos especificados.", () => {
      const setA = new Set();
      setA.add(3);
      setA.add(7);
      setA.add(12);

      const setB = new Set();
      setB.add(3);
      setB.add(7);
      setB.add(12);

      const union = setA.union(setB);

      expect(union.size()).toBe(3);
      expect(union.values()).toEqual([3, 7, 12]);
   });

   it.todo(
      "Intersecção: dados dois conjuntos, devolve um novo conjunto com os elementos presentes em ambos os conjuntos."
   );

   it.todo(
      "Diferença: dados dois conjuntos, devolve um novo conjunto com todos os elementos presentes no primeiro conjunto, mas não no segundo."
   );

   it.todo("Subconjuno: confirma se um dado conjunto é um subconjunto de outro.");
});
