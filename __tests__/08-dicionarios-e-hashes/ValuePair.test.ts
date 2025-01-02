import ValuePair from "../../src/08-dicionarios-e-hashes/ValuePair";

describe("ValuePair", () => {
   const valuePair = new ValuePair("user", {
      nome: "Matheus",
   });

   it("Deve criar uma instancia de ValuePair", () => {
      expect(valuePair).toBeInstanceOf(ValuePair);
   });

   it.todo("toString(): Deve retornar uma string com a key/value no formato: 'key: value'");
});
