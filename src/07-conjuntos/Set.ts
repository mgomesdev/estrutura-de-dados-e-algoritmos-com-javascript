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
}

export default Set;
