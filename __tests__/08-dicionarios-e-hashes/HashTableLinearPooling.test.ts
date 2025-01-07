import HashTableLinearPooling from "../../src/08-dicionarios-e-hashes/HashTableLinearPooling";

describe("HashTableLinearPooling", () => {
   it("Deve criar uma instancia de HashTableLinearPooling.", () => {
      const hashTableLinearPooling = new HashTableLinearPooling();
      expect(hashTableLinearPooling).toBeInstanceOf(HashTableLinearPooling);
   });

   it("put(key, value): adiciona um novo item.", () => {
      const hashTableLinearPooling = new HashTableLinearPooling();

      const add = hashTableLinearPooling.put("nome1", "Matheus");

      expect(add).toBeTruthy();
   });

   it.todo("get(key): obtem um valor dava uma chave.");

   it.todo("remove(key): remove um elemento.");
});
