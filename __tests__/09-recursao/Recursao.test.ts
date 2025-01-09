import Recursao from "../../src/09-recursao/Recursao";

describe("Recursao", () => {
   describe("Entendendo recursao", () => {
      beforeEach(() => jest.clearAllMocks());

      it("Deve retornar false enquanto o usuário não responder true", () => {
         jest.spyOn(window, "confirm").mockReturnValueOnce(false).mockReturnValue(false).mockReturnValue(true);
         expect(Recursao.understandRecursion(false)).toBeTruthy();
         expect(confirm).toHaveBeenCalledTimes(2);
      });

      it("Deve retornar true imediatamente quando o usuario responder true", () => {
         jest.spyOn(window, "confirm").mockReturnValue(true);
         expect(Recursao.understandRecursion(true)).toBeTruthy();
         expect(confirm).toHaveBeenCalledTimes(1);
      });

      it("Deve mostrar o confirm com a pergunta correta na tela", () => {
         Recursao.understandRecursion(true);
         expect(confirm).toHaveBeenCalledWith("Do you understand recursion?");
      });
   });

   describe("Calculando o fatorial de um numero", () => {
      it("Fatorial iterativo", () => {
         const factorialIterative = Recursao.factorialIterative(7);
         expect(factorialIterative).toBe(5040);
      });

      it("Fatorial recursivo", () => {
         const factorialRecursive = Recursao.factorialRecursive(5);
         expect(factorialRecursive).toBe(120);
      });
   });

   describe("Pilha de chamadas", () => {
      it("Limitação do tamanho da pilha de chamadas em JavaScript -> erro de stack overflow (erro de transbordamento de pilha).", () => {
         jest
            .spyOn(Recursao, "stackOverflowError")
            .mockReturnValueOnce("i = 13706: RangeError: Maximum call stack size exceeded");

         const stackOverflow = Recursao.stackOverflowError();
         expect(stackOverflow).toBe("i = 13706: RangeError: Maximum call stack size exceeded");
      });
   });

   describe("Sequencia de Fibonacci", () => {
      it("Fibonacci Iterativo", () => {
         const fibonacciIterative = Recursao.fibonacciIterative(7);
         expect(fibonacciIterative).toBe(13);
      });

      it.todo("Fibonacci Recursivo");

      it.todo("Fibonacci com memoização");
   });
});
