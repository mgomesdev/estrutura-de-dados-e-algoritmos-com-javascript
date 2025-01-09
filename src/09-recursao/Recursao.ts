const Recursao = {
   understandRecursion: (doIunderstandRecursion: boolean): void | boolean => {
      const recursionAnswer = confirm("Do you understand recursion?");

      if (recursionAnswer === true) return true;

      return Recursao.understandRecursion(recursionAnswer);
   },

   factorialIterative: (number: number) => {
      if (number < 0) return undefined;

      let total = 1;

      for (let n = number; n > 1; n--) {
         total *= n;
      }

      return total;
   },

   factorialRecursive: (n: number): number => {
      if (n === 1 || n === 0) return 1;

      return n * Recursao.factorialRecursive(n - 1);
   },

   stackOverflowError: () => {
      let i = 0;

      function recursiveFn() {
         i++;
         recursiveFn();
      }

      try {
         recursiveFn();
      } catch (ex) {
         return `i = ${i}: ${ex}`;
      }
   },

   fibonacciIterative: (n: number) => {
      if (n < 1) return 0;
      if (n <= 2) return 1;

      let fibNMinus2 = 0;
      let fibNMinus1 = 1;
      let fibN = n;

      for (let i = 2; i <= n; i++) {
         fibN = fibNMinus1 + fibNMinus2;
         fibNMinus2 = fibNMinus1;
         fibNMinus1 = fibN;
      }

      return fibN;
   },

   fibonacciRecursive: (n: number): number => {
      if (n < 1) return 0;
      if (n <= 2) return 1;
      return Recursao.fibonacciRecursive(n - 1) + Recursao.fibonacciRecursive(n - 2);
   },

   fibonacciMemoization: (n: number): number => {
      const memo: number[] = [0, 1];

      const fibonacci = (n: number): number => {
         if (memo[n] !== undefined) return memo[n];

         memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
         return memo[n];
      };

      return fibonacci(n);
   },
};

export default Recursao;
