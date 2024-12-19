import Node from "../../src/06-listas-ligadas/Node";

describe("LinkedList: -> Node: Classe auxiliar para representar a cabeça (head) e outros elementos da lista ligada", () => {
   it("Deve criar o objeto Node corretamente", () => {
      const node = new Node(12);
      expect(node).toEqual({ element: 12, next: undefined });
   });

   it("Deve retornar o element do node", () => {
      const node = new Node(12);
      expect(node.getElement()).toBe(12);
   });
});
