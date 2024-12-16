import StackWeakMap from "../../src/04-pilhas/StackWeakMap";

describe("04 - Pilhas: StackWeakMap", () => {
   it("Deve retornar a stack", () => {
      const stack = new StackWeakMap();

      expect(stack.get()).toEqual([]);
   });

   it("Deve adicionar um item a stack", () => {
      const stack = new StackWeakMap();

      stack.push(5);

      expect(stack.get()).toEqual([5]);
   });

   it("Deve retornar se a stack está vazia", () => {
      const stack = new StackWeakMap();
      const emptyStack = new StackWeakMap();

      stack.push(5);

      expect(stack.isEmpty()).toBeFalsy();
      expect(emptyStack.isEmpty()).toBeTruthy();
   });

   it("Deve remover um item da stack", () => {
      const stack = new StackWeakMap();

      stack.push(5);
      stack.push(7);
      stack.pop();

      expect(stack.get()).toEqual([5]);
   });

   it("Deve retornar o ultimo item da stack", () => {
      const stack = new StackWeakMap();

      stack.push(5);
      stack.push(7);

      expect(stack.peek()).toBe(7);
   });

   it("Deve retornar o tamanho da stack", () => {
      const stack = new StackWeakMap();

      stack.push(5);
      stack.push(7);

      expect(stack.size()).toBe(2);
   });
});
