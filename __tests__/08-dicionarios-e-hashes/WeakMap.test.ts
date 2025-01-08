describe("WeakMap", () => {
   it("Exemplo de uso dos metodos de WeakMap Nativo", () => {
      const weakMap = new WeakMap();

      const key = { name: "matheus" };
      weakMap.set(key, "matheusgomes1203@hotmail.com");

      expect(weakMap.has(key)).toBeTruthy();
      expect(weakMap.get(key)).toBe("matheusgomes1203@hotmail.com");
   });
});
