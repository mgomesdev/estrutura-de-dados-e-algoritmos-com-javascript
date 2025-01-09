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
};

export default Recursao;
