import Dictionary from "../../src/08-dicionarios-e-hashes/Dictionary";

describe("Dictionary", () => {
   it("Criando instancia da classe Dictionary", () => {
      const dictionary = new Dictionary();
      expect(dictionary).toBeInstanceOf(Dictionary);
   });

   describe("set(key, value): adiciona um novo elemento ao dicionário. Se key já existir, seu valor será sobrescrito com o novo valor.", () => {
      it("set(key, value): adiciona um novo elemento ao dicionário.", () => {
         const dictionary = new Dictionary();

         const addItem = dictionary.set("user", {
            nome: "Matheus",
         });

         expect(addItem).toBeTruthy();
      });

      it("Se key já existir, seu valor será sobrescrito com o novo valor", () => {
         const dictionary = new Dictionary();

         dictionary.set("user1", "Matheus");
         dictionary.set("user1", "Silvana");

         expect(dictionary.table["user1"]).toEqual({
            key: "user1",
            value: "Silvana",
         });
      });
   });

   it("remove(key): remove value do dicionário usando key como o parâmetro de busca.", () => {
      const dictionary = new Dictionary();

      dictionary.set("user1", "Matheus");
      dictionary.set("user2", "Matheus");
      dictionary.set("user3", "Matheus");

      dictionary.remove("user2");

      expect(dictionary.hasKey("user2")).toBeFalsy();
   });

   describe("hasKey(key): devolve true se key estiver presente no dicionário, e false caso contrário.", () => {
      const dictionary = new Dictionary();

      dictionary.set("user", "Matheus");

      it("hasKey(key): devolve true se key estiver presente no dicionário.", () => {
         expect(dictionary.hasKey("user")).toBeTruthy();
      });

      it("hasKey(key): devolve false se key não estiver presente no dicionario.", () => {
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
