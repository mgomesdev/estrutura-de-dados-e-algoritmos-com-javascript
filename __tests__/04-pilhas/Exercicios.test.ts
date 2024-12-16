import exercicios from "../../src/04-pilhas/Exercicios";

describe("04 - Pilhas: Resolvendo problemas usando pilhas", () => {
   it("Convertendo números decimais para binários", () => {
      expect(exercicios.decimalToBinary(233)).toBe("11101001");
      expect(exercicios.decimalToBinary(10)).toBe("1010");
      expect(exercicios.decimalToBinary(1000)).toBe("1111101000");
   });

   it("Algoritmo conversor de base", () => {
      expect(exercicios.baseConverter(100345, 2)).toBe("11000011111111001");
      expect(exercicios.baseConverter(100345, 8)).toBe("303771");
      expect(exercicios.baseConverter(100345, 16)).toBe("187F9");
      expect(exercicios.baseConverter(100345, 35)).toBe("2BX0");
   });
});
