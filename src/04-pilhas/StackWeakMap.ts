class StackWeakMap {
   private items = new WeakMap();

   constructor() {
      this.items.set(this, []);
   }

   get() {
      return this.items.get(this);
   }

   push(element: number) {
      this.items.get(this).push(element);
   }

   pop() {
      const s = this.items.get(this);
      const r = s.pop();
      return r;
   }

   peek() {
      const getItems = this.items.get(this);
      return getItems[getItems.length - 1];
   }

   isEmpty() {
      return this.items.get(this).length === 0;
   }

   clear() {
      this.items.set(this, []);
   }

   size() {
      return this.items.get(this).length;
   }
}

export default StackWeakMap;
