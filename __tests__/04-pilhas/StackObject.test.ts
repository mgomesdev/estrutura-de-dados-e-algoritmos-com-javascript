import StackObject from "../../src/04-pilhas/StackObject";

describe("04 - Pilhas: StackObject", () => {
   it("Deve retornar a stack", () => {
      const stack = new StackObject();

      expect(stack.get()).toEqual({});
   });

   it("Deve adicionar um item a stack", () => {
      const stack = new StackObject();

      stack.push(5);

      expect(stack.get()).toEqual({ 0: 5 });
   });

   it("Deve retornar se a stack está vazia", () => {
      const stack = new StackObject();
      const emptyStack = new StackObject();

      stack.push(5);

      expect(stack.isEmpty()).toBeFalsy();
      expect(emptyStack.isEmpty()).toBeTruthy();
   });

   it("Deve remover um item da stack", () => {
      const stack = new StackObject();

      stack.push(5);
      stack.push(7);
      stack.pop();

      expect(stack.get()).toEqual({ 0: 5 });
   });

   it("Deve retornar o ultimo item da stack", () => {
      const stack = new StackObject();

      stack.push(5);
      stack.push(7);

      expect(stack.peek()).toBe(7);
   });

   it("Deve retornar o tamanho da stack", () => {
      const stack = new StackObject();

      stack.push(5);
      stack.push(7);

      expect(stack.size()).toBe(2);
   });

   it("Deve retornar a stack em formato de string", () => {
      const stack = new StackObject();

      stack.push(5);
      stack.push(7);

      expect(stack.toString()).toEqual("5,7");
   });
});
