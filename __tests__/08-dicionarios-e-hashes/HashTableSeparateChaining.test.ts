import HashTableSeparateChaining from "../../src/08-dicionarios-e-hashes/HashTableSeparateChaining";

describe("HashTableSeparateChaining", () => {
   it("Deve criar uma instancia de HashTableSeparateChaining.", () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining();
      expect(hashTableSeparateChaining).toBeInstanceOf(HashTableSeparateChaining);
   });

   it.todo("put(key, value): adiciona um novo item.");

   it.todo("get(key): obtem um valor dava uma chave.");

   it.todo("remove(key): remove um elemento.");
});
