import setNative from "../../src/07-conjuntos/SetNative";

describe("ES6 - A classe Set", () => {
   it("Implementando a classe Set", () => {
      const set = new Set();

      set.add(3);
      set.add(7);

      expect(set.size).toBe(2);
   });

   describe("Operações com a classe set", () => {
      it("Simulando a operação de união", () => {
         const setA = new Set<number>();
         setA.add(1);
         setA.add(2);
         setA.add(3);

         const setB = new Set<number>();
         setB.add(2);
         setB.add(3);
         setB.add(4);

         const union = setNative.union(setA, setB);

         expect(union).toEqual(new Set([1, 2, 3, 4]));
      });

      it("Simulando a operação de intersecção", () => {
         const setA = new Set<number>();
         setA.add(1);
         setA.add(2);
         setA.add(3);

         const setB = new Set<number>();
         setB.add(2);
         setB.add(3);
         setB.add(4);

         const intersection = setNative.intersection(setA, setB);

         expect(intersection).toEqual(new Set([2, 3]));
      });

      it("Simulando a operação de diferença", () => {
         const setA = new Set<number>();
         setA.add(1);
         setA.add(2);
         setA.add(3);

         const setB = new Set<number>();
         setB.add(2);
         setB.add(3);
         setB.add(4);

         const difference = setNative.difference(setA, setB);

         expect(difference).toEqual(new Set([1]));
      });

      it("Usando o operador de espalhamento", () => {
         const setA = new Set<number>();
         setA.add(1);
         setA.add(2);
         setA.add(3);

         const setB = new Set<number>();
         setB.add(2);
         setB.add(3);
         setB.add(4);

         const intersection = new Set([...setA].filter((x) => setB.has(x)));
         const difference = new Set([...setA].filter((x) => !setB.has(x)));

         expect(intersection).toEqual(new Set([2, 3]));
         expect(difference).toEqual(new Set([1]));
      });
   });
});
