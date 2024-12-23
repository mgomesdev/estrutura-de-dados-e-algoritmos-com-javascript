import DoublyLinkedList from "../../src/06-listas-ligadas/DoublyLinkedList";
import { defaultEquals } from "../../src/06-listas-ligadas/LinkedList";

describe("DoublyLinkedList", () => {
   it("Deve criar a instancia de DoublyLinkeList corretamente", () => {
      const doublyLinkedList = new DoublyLinkedList();
      expect(doublyLinkedList).toEqual({ _tail: undefined, _count: 0, _equalsFn: defaultEquals, _head: undefined });
   });

   it("insert(element, index): insere um novo elemento em qualquer posição", () => {
      const doublyLinkedList = new DoublyLinkedList();

      doublyLinkedList.insert(20, 0);

      expect(doublyLinkedList).toEqual({
         _count: 1,
         _equalsFn: defaultEquals,
         _head: {
            _element: 20,
            _next: undefined,
            _prev: undefined,
         },
         _tail: {
            _element: 20,
            _next: undefined,
            _prev: undefined,
         },
      });
   });
});
