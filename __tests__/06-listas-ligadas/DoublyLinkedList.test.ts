import DoublyLinkedList from "../../src/06-listas-ligadas/DoublyLinkedList";
import { defaultEquals } from "../../src/06-listas-ligadas/LinkedList";

describe("DoublyLinkedList", () => {
   it("Deve criar a instancia de DoublyLinkeList corretamente", () => {
      const doublyLinkedList = new DoublyLinkedList();
      expect(doublyLinkedList).toEqual({ _tail: undefined, count: 0, equalsFn: defaultEquals, head: undefined });
   });
});
