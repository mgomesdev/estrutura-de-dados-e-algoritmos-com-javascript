class Set {
   private items: { [key: number]: number };

   constructor() {
      this.items = {};
   }

   hasElement(element: number) {
      return Object.prototype.hasOwnProperty.call(this.items, element);
   }

   add(element: number) {
      if (!this.hasElement(element)) {
         this.items[element] = element;
         return true;
      }

      return false;
   }

   delete(element: number) {
      if (this.hasElement(element)) {
         delete this.items[element];
         return true;
      }

      return false;
   }

   clear() {
      this.items = {};
   }

   size() {
      return Object.keys(this.items).length;
   }

   values() {
      return Object.values(this.items);
   }
}

export default Set;
