import StackLinkedList from "../../src/06-listas-ligadas/StackLinkedList";

describe("StackLinkedList", () => {
   it("Deve criar uma instancia de StackLinkedList", () => {
      const stackLinkedList = new StackLinkedList();
      expect(stackLinkedList).toBeInstanceOf(StackLinkedList);
   });
});
