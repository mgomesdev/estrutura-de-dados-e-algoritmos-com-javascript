class StackObject {
   private count: number;
   private items: Record<number, number>;

   constructor() {
      this.count = 0;
      this.items = {};
   }

   get() {
      return this.items;
   }

   push(element: number) {
      this.items[this.count] = element;
      this.count++;
   }

   isEmpty() {
      return this.count === 0;
   }

   pop() {
      if (this.isEmpty()) return undefined;

      this.count--;

      const result = this.items[this.count];
      delete this.items[this.count];

      return result;
   }

   peek() {
      if (this.isEmpty()) return undefined;

      return this.items[this.count - 1];
   }

   clear() {
      while (!this.isEmpty()) this.pop();
   }

   size() {
      return this.count;
   }

   toString() {
      if (this.isEmpty()) return "";

      let objString = ``;

      for (let i = 0; i < this.count; i++) {
         objString = `${this.items[0]},${this.items[i]}`;
      }

      return objString;
   }
}

export default StackObject;
