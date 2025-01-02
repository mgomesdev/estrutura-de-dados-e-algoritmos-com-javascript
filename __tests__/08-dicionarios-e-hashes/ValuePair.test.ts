import ValuePair from "../../src/08-dicionarios-e-hashes/ValuePair";

describe("ValuePair", () => {
   const valuePairObject = new ValuePair("user2", {
      nome: "Matheus",
   });

   it("Deve criar uma instancia de ValuePair", () => {
      expect(valuePairObject).toBeInstanceOf(ValuePair);
   });

   it("toString(): Deve retornar uma string com a key/value no formato: '[#key]: value'", () => {
      const valuePair = new ValuePair("user1", "Matheus");

      expect(valuePair.toString()).toBe("[#user1]: Matheus");
      expect(valuePairObject.toString()).toBe(`[#user2]: ${JSON.stringify({ nome: "Matheus" })}`);
   });
});
