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

   it("put(key,value): adicionar um novo item á tabela hash (ou pode atualizá-la também).", () => {
      const hashTable = new HashTable();

      hashTable.put("nome", "matheus");

      expect(hashTable.getTable()).toEqual({ 24: { key: "nome", value: "matheus" } });
   });

   it("remove(key): remove o value da tabela hash usando key.", () => {
      const hashTable = new HashTable();

      hashTable.put("nome1", "matheus");
      hashTable.put("nome2", "silvana");

      hashTable.remove("nome1");

      expect(hashTable.getTable()).toEqual({ 0: { key: "nome2", value: "silvana" } });
   });

   it("get(key): devolve um value específico encontrado com key.", () => {
      const hashTable = new HashTable();

      hashTable.put("nome", "matheus");

      expect(hashTable.get("nome")).toBe("matheus");
   });

   it("toString(): se o dicionário estiver vazio, devolvemos uma string vazia. Caso contrário devolve o primeiro ValuePair na string resultante.", () => {
      const hashTable1 = new HashTable();
      const hashTable2 = new HashTable();

      hashTable1.put("nome", "matheus");

      expect(hashTable1.toString()).toBe("24 => [#nome]: matheus");
      expect(hashTable2.toString()).toBe("");
   });
});
