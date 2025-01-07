import HashTableLinearPooling from "../../src/08-dicionarios-e-hashes/HashTableLinearPooling";

describe("HashTableLinearPooling", () => {
   it("Deve criar uma instancia de HashTableLinearPooling", () => {
      const hashTableLinearPooling = new HashTableLinearPooling();
      expect(hashTableLinearPooling).toBeInstanceOf(HashTableLinearPooling);
   });

   it.todo("put(key, value): adiciona um novo item.");

   it.todo("get(key): obtem um valor dava uma chave.");

   it.todo("remove(key): remove um elemento.");
});
