import StackLinkedList from "../../src/06-listas-ligadas/StackLinkedList";

describe("StackLinkedList", () => {
   it("Deve criar uma instancia de StackLinkedList", () => {
      const stackLinkedList = new StackLinkedList();
      expect(stackLinkedList).toBeInstanceOf(StackLinkedList);
   });

   it("Deve retornar o tamanho da pilha", () => {
      const stackLinkedList = new StackLinkedList();
      expect(stackLinkedList.size()).toBe(0);
   });

   it("Deve inserir dados da pilha", () => {
      const stackLinkedList = new StackLinkedList();

      stackLinkedList.push(10);
      stackLinkedList.push(20);

      expect(stackLinkedList.size()).toBe(2);
   });

   it("Deve remover dados da pilha", () => {
      const stackLinkedList = new StackLinkedList();

      stackLinkedList.push(10);
      stackLinkedList.push(20);

      stackLinkedList.pop();

      expect(stackLinkedList.size()).toBe(1);
   });
});
