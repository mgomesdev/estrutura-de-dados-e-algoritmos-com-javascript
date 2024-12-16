import StackArray from "./StackArray";

const exercicios = {
   decimalToBinary: (decNumber: number) => {
      const remStack = new StackArray();
      let number = decNumber;
      let rem: number;
      let binaryString = "";

      while (number > 0) {
         rem = Math.floor(number % 2);
         remStack.push([rem]);
         number = Math.floor(number / 2);
      }

      while (!remStack.isEmpty()) {
         binaryString += remStack.pop()?.toString();
      }

      return binaryString;
   },

   baseConverter: (decNumber: number, base: number) => {
      const remStack = new StackArray();
      const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVXZ";

      let number = decNumber;
      let rem: number;
      let baseString = "";

      if (!(base >= 2 && base <= 36)) {
         return "";
      }

      while (number > 0) {
         rem = Math.floor(number % base);
         remStack.push([rem]);
         number = Math.floor(number / base);
      }

      while (!remStack.isEmpty()) {
         baseString += digits[remStack.pop()!];
      }

      return baseString;
   },
};

export default exercicios;
