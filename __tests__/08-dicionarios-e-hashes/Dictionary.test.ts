import Dictionary from "../../src/08-dicionarios-e-hashes/Dictionary";

describe("Dictionary", () => {
   it("Criando instancia da classe Dictionary", () => {
      const dictionary = new Dictionary();
      expect(dictionary).toBeInstanceOf(Dictionary);
   });

   describe("set(key, value): adiciona um novo elemento ao dicionário. Se key já existir, seu valor será sobrescrito com o novo valor.", () => {
      it("set(key, value): adiciona um novo elemento ao dicionário.", () => {
         const dictionary = new Dictionary();

         dictionary.set("nome", "Matheus");

         expect(dictionary.table["nome"]).toBe("Matheus");
      });

      it.todo("Se key já existir, seu valor será sobrescrito com o novo valor");
   });

   it.todo("remove(key): remove value do dicionário usando key como o parâmetro de busca.");

   describe("hasKey(key): devolve true se key estiver presente no dicionário, e false caso contrário.", () => {
      it.todo("hasKey(key): devolve true se key estiver presente no dicionário.");

      it("hasKey(key): devolve false se key não estiver presente no dicionario.", () => {
         const dictionary = new Dictionary();
         expect(dictionary.hasKey("")).toBeFalsy();
      });
   });

   it.todo("get(key): devolve um value específico do dicionário usando key como o parâmetro de busca.");

   it.todo("clear(): remove todos os valores do dicionário.");

   it.todo(
      "size(): devolve a quantidade de valores contida no dicionário. É semelhante à propriedade length da classe Array."
   );

   it.todo("isEmpty(): devolve true se size for igual a zero, e false caso contrário.");

   it.todo("keys(): devolve um array com todas as chaves contidas no dicionário.");

   it.todo("values(): devolve um array com todos os valores contidos no dicionário.");

   it.todo("keyValues(): devolve um array com todos os pares de valores [chave, valor] contidos no dicionário.");

   it.todo(
      "forEach(callbackFn): itera pelos valores (value) do dicionário. A função callbackFn tem dois parâmetros: key e value. Esse método também pode ser interrompido caso a função de callback devolva false (é semelhante ao método every da classe Array)."
   );
});
