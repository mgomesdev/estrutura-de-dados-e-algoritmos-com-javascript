import StackArray from "../../src/04-pilhas/StackArray";

describe("04 - Pilhas: StackArray", () => {
   it("Deve retornar o array atual", () => {
      const stack = new StackArray();

      expect(stack.get()).toEqual([]);
   });

   it("Deve adicionar um item na stack", () => {
      const stack = new StackArray();

      stack.push([5]);

      expect(stack.get()).toEqual([5]);
   });

   it("Deve remover um item da stack", () => {
      const stack = new StackArray();

      stack.push([5, 6, 7]);
      stack.pop();

      expect(stack.get()).toEqual([5, 6]);
   });

   it("Deve retornar o item do topo da stack", () => {
      const stack = new StackArray();

      stack.push([5, 6, 7]);

      expect(stack.peek()).toBe(7);
   });

   it("Deve retornar se a stack está vazia", () => {
      const stack = new StackArray();
      const emptyStack = new StackArray();

      stack.push([5]);

      expect(stack.isEmpty()).toBeFalsy();
      expect(emptyStack.isEmpty()).toBeTruthy();
   });

   it("Deve limpar todos os items da stack", () => {
      const stack = new StackArray();

      stack.push([5]);
      stack.clear();

      expect(stack.get()).toEqual([]);
   });

   it("Deve retornar o tamanho da stack", () => {
      const stack = new StackArray();

      stack.push([5]);

      expect(stack.size()).toBe(1);
   });
});
