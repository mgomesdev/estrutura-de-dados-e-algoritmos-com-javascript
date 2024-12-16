import ExerciciosFilasDeques from "../../src/05-filas-e-deques/Exercicios";

describe("Resolvendo problemas usando filas e deques", () => {
   it("Fila circular - Batata Quente", () => {
      const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
      const result = ExerciciosFilasDeques.hotPotato(names, 7);

      const eliminated = result.eliminated.map((name) => `${name}`);
      const winner = result.winner;

      expect(eliminated).toEqual(["Camila", "Jack", "Carl", "Ingrid"]);
      expect(winner).toBe("John");
   });

   it("Verificador de palíndromo", () => {
      expect(ExerciciosFilasDeques.palindromeChecker("a")).toBeTruthy();
      expect(ExerciciosFilasDeques.palindromeChecker("aa")).toBeTruthy();
      expect(ExerciciosFilasDeques.palindromeChecker("kayak")).toBeTruthy();
      expect(ExerciciosFilasDeques.palindromeChecker("matheus")).toBeFalsy();
   });
});
