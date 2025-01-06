import LinkedList from "../../src/06-listas-ligadas/LinkedList";
import HashTableSeparateChaining from "../../src/08-dicionarios-e-hashes/HashTableSeparateChaining";

describe("HashTableSeparateChaining", () => {
   it("Deve criar uma instancia de HashTableSeparateChaining.", () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining();
      expect(hashTableSeparateChaining).toBeInstanceOf(HashTableSeparateChaining);
   });

   it("put(key, value): adiciona um novo item.", () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining();

      const add = hashTableSeparateChaining.put("nome1", "matheus");

      expect(add).toBeTruthy();
   });

   it("get(key): obtem um valor dava uma chave.", () => {
      const hashTableSeparateChaining = new HashTableSeparateChaining();

      hashTableSeparateChaining.put("nome1", "matheus");

      throw "O teste entrou em loop, rever os erros, provavelmente é nos tipos do Node<T>";

      expect(hashTableSeparateChaining.get("nome1")).toBe("matheus");
   });

   it.todo("remove(key): remove um elemento.");
});
