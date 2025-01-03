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

         expect(dictionary.get("user1")).toEqual({ key: "user1", value: "Silvana" });
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

   it("get(key): devolve um value específico do dicionário usando key como o parâmetro de busca.", () => {
      const dictionary = new Dictionary();

      dictionary.set("user", "Matheus");

      expect(dictionary.get("user")).toEqual({
         key: "user",
         value: "Matheus",
      });
   });

   it.todo("clear(): remove todos os valores do dicionário.");

   it("size(): devolve a quantidade de valores contida no dicionário. É semelhante à propriedade length da classe Array.", () => {
      const dictionary = new Dictionary();

      dictionary.set("user1", "Matheus");
      dictionary.set("user2", "Matheus");
      dictionary.set("user3", "Matheus");

      expect(dictionary.size()).toBe(3);
   });

   it("isEmpty(): devolve true se size for igual a zero, e false caso contrário.", () => {
      const dictionary = new Dictionary();

      expect(dictionary.isEmpty()).toBeTruthy();
   });

   it("keys(): devolve um array com todas as chaves contidas no dicionário.", () => {
      const dictionary = new Dictionary();

      dictionary.set("user", "Matheus");

      expect(dictionary.keys()).toEqual(["user"]);
   });

   it("values(): devolve um array com todos os valores contidos no dicionário.", () => {
      const dictionary = new Dictionary();

      dictionary.set("user", "Matheus");

      expect(dictionary.values()).toEqual(["Matheus"]);
   });

   it("keyValues(): devolve um array com todos os pares de valores [chave, valor] contidos no dicionário.", () => {
      const dictionary = new Dictionary();

      dictionary.set("user", "Matheus");

      expect(dictionary.keyValues()).toEqual([
         {
            key: "user",
            value: "Matheus",
         },
      ]);
   });

   it("forEach(callbackFn): itera pelos valores (value) do dicionário. A função callbackFn tem dois parâmetros: key e value. Esse método também pode ser interrompido caso a função de callback devolva false (é semelhante ao método every da classe Array).", () => {
      const dictionary = new Dictionary();

      dictionary.set("user", "Matheus");
      dictionary.set("user1", "Silvana");

      let users: string[] = [];

      dictionary.forEach((k, v) => {
         const searchUsers = ["Matheus", "Silvana"];

         if (searchUsers.includes(v as string)) {
            users.push(v as string);
         }
      });

      expect(users).toEqual(["Matheus", "Silvana"]);
   });
});
