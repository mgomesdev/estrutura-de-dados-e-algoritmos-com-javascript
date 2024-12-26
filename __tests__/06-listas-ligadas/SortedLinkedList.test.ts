import SortedLinkedList from "../../src/06-listas-ligadas/SortedLinkedList";

describe("SortedLinkedList: Listas ligadas ordenadas", () => {
   it("Deve criar uma instancia de SortedLinkedList", () => {
      const sortedLinkedList = new SortedLinkedList();
      expect(sortedLinkedList).toBeInstanceOf(SortedLinkedList);
   });

   it("Deve inserir os elementos na ordem", () => {
      const sortedLinkedList = new SortedLinkedList();

      sortedLinkedList.insert(3, 0);
      sortedLinkedList.insert(2, 1);
      sortedLinkedList.insert(1, 2);

      expect(sortedLinkedList.getElementAt(0)?.element).toBe(1);
      expect(sortedLinkedList.getElementAt(1)?.element).toBe(2);
      expect(sortedLinkedList.getElementAt(2)?.element).toBe(3);
   });
});
