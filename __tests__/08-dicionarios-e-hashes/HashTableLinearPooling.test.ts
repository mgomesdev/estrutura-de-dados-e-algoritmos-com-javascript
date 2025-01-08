import HashTableLinearPooling from "../../src/08-dicionarios-e-hashes/HashTableLinearPooling";

describe("HashTableLinearPooling", () => {
   it("Deve criar uma instancia de HashTableLinearPooling.", () => {
      const hashTableLinearPooling = new HashTableLinearPooling();
      expect(hashTableLinearPooling).toBeInstanceOf(HashTableLinearPooling);
   });

   it("put(key, value): adiciona um novo item.", () => {
      const hashTableLinearPooling = new HashTableLinearPooling();
      expect(hashTableLinearPooling.put("nome1", "Matheus")).toBeTruthy();
   });

   it("get(key): obtem um valor dava uma chave.", () => {
      const hashTableLinearPooling = new HashTableLinearPooling();
      hashTableLinearPooling.put("nome1", "matheus");
      expect(hashTableLinearPooling.get("nome1")).toBe("matheus");
   });

   it("remove(key): remove um elemento.", () => {
      const hashTableLinearPooling = new HashTableLinearPooling();
      hashTableLinearPooling.put("nome1", "matheus");
      expect(hashTableLinearPooling.remove("nome1")).toBeTruthy();
   });

   it.todo(
      "verifyRemoveSideEffect(key, removedPosition): verifica se há elementos com o mesmo hash em uma position diferente e se a remoção tem algum efeito colateral."
   );

   it("djb2HashCode(key)", () => {
      const hashTableLinearPooling = new HashTableLinearPooling();
      expect(hashTableLinearPooling.djb2HashCode("matheus")).toBe(532);
   });
});
