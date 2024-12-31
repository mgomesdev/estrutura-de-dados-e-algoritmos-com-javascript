const setNative = {
   union: (set1: Set<number>, set2: Set<number>) => {
      const unionAB = new Set();

      set1.forEach((value) => unionAB.add(value));
      set2.forEach((value) => unionAB.add(value));

      return unionAB;
   },

   intersection: (set1: Set<number>, set2: Set<number>) => {
      const intersectionSet = new Set();

      set1.forEach((value) => {
         if (set2.has(value)) intersectionSet.add(value);
      });

      return intersectionSet;
   },

   difference: (set1: Set<number>, set2: Set<number>) => {
      const differenceSet = new Set();

      set1.forEach((value) => {
         if (!set2.has(value)) differenceSet.add(value);
      });

      return differenceSet;
   },
};

export default setNative;
