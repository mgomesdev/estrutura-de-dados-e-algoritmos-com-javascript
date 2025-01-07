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

   it("Parei aqui: Criando funções melhores de hash.", () => {
      throw [
         "Proximos Passos:",
         "- Finalizar o capitulo.",
         "- Fazer os exemplos com Map, Set Weak etc…",
         "- Remover duplicação dos metodos através de herança.",
         "- Sobrescrever os métodos através do polimorfismo.",
         "- Verificar cobertura de testes.",
         "- Utilizar o chatgpt para criar o teste do método SideEffect.",
         "- Organizar proximos passos -> Recursão.",
      ];
   });
});
