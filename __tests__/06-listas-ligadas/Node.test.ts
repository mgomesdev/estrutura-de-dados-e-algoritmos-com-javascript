import Node from "../../src/06-listas-ligadas/Node";

describe("LinkedList: -> Node: Classe auxiliar para representar a cabeça (head) e outros elementos da lista ligada", () => {
   it("Deve criar o objeto Node corretamente", () => {
      const node = new Node(12);
      expect(node).toEqual({ _element: 12, _next: undefined });
   });

   it("Deve retornar o element do node", () => {
      const node = new Node(12);
      expect(node.getElement()).toBe(12);
   });

   it("Deve retornar o next do node", () => {
      const node = new Node(12);

      expect(node.getNext()).toBe(undefined);
   });
});
