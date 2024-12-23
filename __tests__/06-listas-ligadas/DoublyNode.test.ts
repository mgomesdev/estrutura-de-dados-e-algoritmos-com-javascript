import DoublyNode from "../../src/06-listas-ligadas/DoublyNode";

describe("DoublyNode", () => {
   it("Deve criar DoublyNode corretamente", () => {
      const doublyNode = new DoublyNode(10, undefined, undefined);

      expect(doublyNode).toEqual({
         _element: 10,
         _next: undefined,
         _prev: undefined,
      });
   });
});
