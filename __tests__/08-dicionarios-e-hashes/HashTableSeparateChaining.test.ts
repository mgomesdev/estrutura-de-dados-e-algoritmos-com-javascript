import HashTableSeparateChaining from "../../src/08-dicionarios-e-hashes/HashTableSeparateChaining";

describe("HashTableSeparateChaining", () => {
   it("Deve criar uma instancia de HashTableSeparateChaining.", () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining();
      expect(hashTableSeparateChaining).toBeInstanceOf(HashTableSeparateChaining);
   });

   it("put(key, value): adiciona um novo item.", () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining();
      expect(hashTableSeparateChaining.put("nome1", "matheus")).toBeTruthy();
   });

   it("get(key): obtem um valor dava uma chave.", () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining();
      hashTableSeparateChaining.put("nome1", "matheus");
      expect(hashTableSeparateChaining.get("nome1")).toBe("matheus");
   });

   it("remove(key): remove um elemento.", () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining();

      hashTableSeparateChaining.put("nome1", "matheus");
      hashTableSeparateChaining.put("nome2", "silvana");

      expect(hashTableSeparateChaining.remove("nome1")).toBeTruthy();
   });
});
