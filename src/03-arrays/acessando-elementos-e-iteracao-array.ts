export const forUnshift = {
   insertFirstPosition: (list: number[], value: number) => {
      const result: number[] = list;

      for (let i = result.length; i >= 0; i--) {
         result[i] = result[i - 1];
      }

      result[0] = value;

      return result;
   },
};

export const forShift = {
   reIndex: (myArray: number[]) => {
      const result: number[] = [];

      for (let i = 0; i < myArray.length; i++) {
         result.push(myArray[i]);
      }

      return result;
   },

   removeFirstPosition: (list: number[]) => {
      const result = [...list];

      for (let i = 0; i < list.length; i++) {
         result[i] = list[i + 1];
      }

      result.length = list.length - 1;

      return forShift.reIndex(result);
   },
};

export const arrayBI = {
   printMatrix: (myMatrix: unknown[][]) => {
      let result: number[] = [];

      for (let i = 0; i < myMatrix.length; i++) {
         for (let j = 0; j < myMatrix[i].length; j++) {
            result.push(myMatrix[i][j] as number);
         }
      }

      return result!;
   },
};

export const arrayMulti = {
   printMatrix: (matrix: number[][][], matrix3x3x3: number[][][]) => {
      let result: number[] = [];

      for (let i = 0; i < matrix.length; i++) {
         for (let j = 0; j < matrix[i].length; j++) {
            for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
               result.push(matrix3x3x3[i][j][z]);
            }
         }
      }

      return result!;
   },
};
