class Set {
   private items: { [key: number]: number };

   constructor() {
      this.items = {};
   }

   hasElement(element: number) {
      return Object.prototype.hasOwnProperty.call(this.items, element);
   }
}

export default Set;
