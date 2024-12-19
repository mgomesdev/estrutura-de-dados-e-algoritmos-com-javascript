import LinkedList from "../../src/06-listas-ligadas/LinkedList";

describe("Criando a classe LinkedList", () => {
   it("push(element): adiciona um novo elemento no final da lista.", () => {
      const linkedList = new LinkedList();

      linkedList.push(15);
      linkedList.push(10);

      expect(linkedList.count).toBe(2);
   });

   it("removeAt(position): remove um item de uma posição especifica da lista.", () => {
      const linkedList = new LinkedList();

      linkedList.push(15);
      linkedList.push(10);

      linkedList.removeAt(1);

      expect(linkedList.count).toBe(1);
   });

   describe("getElementAt(index): devolve o elemento que está em uma posição específica da lista. Se o elemento não estiver na lista, undefined será devolvido.", () => {
      it("devolve o elemento que está em uma posição específica da lista.", () => {
         const linkedList = new LinkedList();

         linkedList.push(15);
         linkedList.push(10);

         expect(linkedList.getElementAt(1)?.element).toBe(10);
      });

      it("Se o elemento não estiver na lista, undefined será devolvido.", () => {
         const linkedList = new LinkedList();

         linkedList.push(15);
         linkedList.push(10);

         expect(linkedList.getElementAt(2)?.element).toBe(undefined);
      });
   });

   it.only("insert(element, position): insere um novo elemento em uma posição específica da lista.", () => {
      const linkedList = new LinkedList();

      linkedList.push(15);
      linkedList.push(10);

      linkedList.insert(20, 1);

      expect(linkedList.getElementAt(1)?.element).toBe(20);
   });

   it.todo("remove(element): remove um elemento da lista.");

   describe("indexOf(element): devolve o índice do elemento na lista. Se o elemento não estiver na lista, -1 será devolvido.", () => {
      it.todo("devolve o índice do elemento na lista.");
      it.todo("Se o elemento não estiver na lista, -1 será devolvido.");
   });

   describe("isEmpty(): devolve true se a lista ligada não contiver nenhum elemento, e false se o tamanho da lista ligada for maior que 0.", () => {
      it.todo("devolve true se a lista ligada não contiver nenhum elemento.");
      it.todo("devolve false se o tamanho da lista ligada for maior que 0.");
   });

   it.todo("size(): devolve o número de elementos contidos na lista ligada.");

   it.todo("toString(): devolve uma representação em string da lista ligada.");
});
