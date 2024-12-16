const defaultEquals = <T>(a: T, b: T) => a === b;

class LinkedList {
   private count: number;
   private head: undefined;
   private equalsFn: typeof defaultEquals;

   constructor(equalsFn = defaultEquals) {
      this.count = 0;
      this.head = undefined;
      this.equalsFn = equalsFn;
   }
}

export default LinkedList;
