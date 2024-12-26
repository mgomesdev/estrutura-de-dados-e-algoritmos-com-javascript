import CircularLinkedList from "../../src/06-listas-ligadas/CircularLinkedList";

describe("CircularLinekdList", () => {
   it("Deve criar uma instancia de CircularLinkedList", () => {
      const circularLinkedList = new CircularLinkedList();
      expect(circularLinkedList).toBeInstanceOf(CircularLinkedList);
   });

   it("Deve inserir um novo elemento em qualquer posição", () => {
      const circularLinkedList = new CircularLinkedList();

      circularLinkedList.insert(10, 0);
      circularLinkedList.insert(20, 1);
      circularLinkedList.insert(30, 2);
      circularLinkedList.insert(7, 0);

      const tail = circularLinkedList.getElementAt(2);

      expect(tail?.element).toBe(7);
   });

   it("Deve remover elementos de qualquer posição", () => {
      const circularLinkedList = new CircularLinkedList();

      circularLinkedList.insert(10, 0);
      circularLinkedList.insert(20, 1);
      circularLinkedList.insert(30, 2);

      circularLinkedList.removeAt(1);

      const tail = circularLinkedList.getElementAt(2);

      expect(tail?.element).toBe(10);
   });
});
