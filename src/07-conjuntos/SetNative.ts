const setNative = {
   union: (set1: Set<number>, set2: Set<number>) => {
      const unionAB = new Set();

      set1.forEach((value) => unionAB.add(value));
      set2.forEach((value) => unionAB.add(value));

      return unionAB;
   },
};

export default setNative;
