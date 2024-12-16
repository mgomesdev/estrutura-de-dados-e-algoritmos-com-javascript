class StackArray {
   private items: number[];

   constructor() {
      this.items = [];
   }

   get() {
      return this.items;
   }

   push(element: number[]) {
      this.items.push(...element);
   }

   pop() {
      return this.items.pop();
   }

   peek() {
      return this.items[this.items.length - 1];
   }

   isEmpty() {
      return this.items.length === 0;
   }

   clear() {
      this.items = [];
   }

   size() {
      return this.items.length;
   }
}

export default StackArray;
