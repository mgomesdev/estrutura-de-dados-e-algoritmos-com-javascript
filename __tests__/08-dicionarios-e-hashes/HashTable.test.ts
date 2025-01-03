import HashTable from "../../src/08-dicionarios-e-hashes/HashTable";

describe("HashTable", () => {
   it("Deve criar a intancia da classe HashTable", () => {
      const hashTable = new HashTable();
      expect(hashTable).toBeInstanceOf(HashTable);
   });

   it("hashCode(key): gera indices para as chaves", () => {
      const hashTable = new HashTable();

      expect(hashTable.hashCode("name")).toBe(10);
      expect(hashTable.hashCode("age")).toBe(5);
   });

   it.todo("put(key,value): adicionar um novo item á tabela hash (ou pode atualizá-la também).");

   it.todo("remove(key): remove o value da tabela hash usando key.");

   it.todo("get(key): devolve um value específico encontrado com key.");
});
