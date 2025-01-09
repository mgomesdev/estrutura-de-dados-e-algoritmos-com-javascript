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
};

export default Recursao;
