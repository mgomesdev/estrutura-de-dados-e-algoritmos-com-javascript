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

   union(otherSet: Set) {
      const unionSet = new Set();

      this.values().forEach((value) => unionSet.add(value));
      otherSet.values().forEach((value) => unionSet.add(value));

      return unionSet;
   }

   intersection(otherSet: Set) {
      const intersectionSet = new Set();
      const otherValues = otherSet.values();
      const values = this.values();

      let smallerSet = otherValues;
      let biggerSet = values;

      if (otherValues.length - values.length) {
         smallerSet = values;
         biggerSet = otherValues;
      }

      smallerSet.forEach((value) => {
         if (biggerSet.includes(value)) intersectionSet.add(value);
      });

      return intersectionSet;
   }

   difference(otherSet: Set) {
      const differenceSet = new Set();

      this.values().forEach((value) => {
         if (!otherSet.hasElement(value)) differenceSet.add(value);
      });

      return differenceSet;
   }
}

export default Set;
