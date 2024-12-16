import Deque from "../../src/05-filas-e-deques/Deque";

describe("Estrutuda de dados de Deque", () => {
   it("Criando a classe Deque", () => {
      const deque = new Deque();

      expect(deque).toBeInstanceOf(Deque);
   });

   it("Adicionando elementos na frente do deque", () => {
      const deque = new Deque();

      deque.addFront(1);

      expect(deque.peekFront()).toBe(1);
   });

   it("Adiciona um novo elemento no fim do deque", () => {
      const deque = new Deque();

      deque.addBack(7);

      expect(deque.peekBack()).toBe(7);
   });

   it("Remove o primeiro elemento do deque", () => {
      const deque = new Deque();

      deque.addFront(1);
      deque.addFront(2);
   });

   it("Remove o último elemento do deque", () => {
      const deque = new Deque();

      deque.addBack(2);

      expect(deque.peekBack()).toBe(2);
   });

   it("Devolve o primeiro elemento do deque", () => {
      const deque = new Deque();

      deque.addFront(2);

      expect(deque.peekFront()).toBe(2);
   });

   it("Devolve o último elemento do deque", () => {
      const deque = new Deque();

      deque.addBack(7);

      expect(deque.peekBack()).toBe(7);
   });

   it("Retorna o tamanho do deque", () => {
      const deque = new Deque();

      deque.addBack(1);
      deque.addBack(2);
      deque.addBack(3);

      expect(deque.size()).toBe(3);
   });

   it("Retorna se o deque está vazio", () => {
      const deque = new Deque();

      expect(deque.isEmpty()).toBeTruthy();
   });

   it("Retorna o deque em formato string", () => {
      const deque = new Deque();

      deque.addBack("John");
      deque.addBack("Jack");

      expect(deque.toString()).toBe("John, Jack");
   });
});
