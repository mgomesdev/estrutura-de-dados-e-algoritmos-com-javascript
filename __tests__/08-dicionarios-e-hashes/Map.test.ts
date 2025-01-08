describe("Map Native", () => {
   it("Exemplo de uso dos métodos da classe nativa Map", () => {
      const map = new Map();

      map.set("Matheus", "matheusgomes1203@hotmail.com");
      map.set("Silvana", "example@hotmail.com");

      expect(map.has("Matheus")).toBeTruthy();
      expect(map.size).toBe(2);
      expect(map.get("Matheus")).toBe("matheusgomes1203@hotmail.com");
      expect(map.delete("Silvana")).toBeTruthy();
   });
});
