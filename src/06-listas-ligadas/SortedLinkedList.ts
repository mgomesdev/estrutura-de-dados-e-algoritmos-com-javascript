import LinkedList, { defaultEquals } from "./LinkedList";

const compare = {
   LESS_THAN: -1,
   BIGGER_THAN: 1,
};

function defaultCompare<T>(a: T, b: T) {
   if (a === b) return 0;

   return a < b ? compare.LESS_THAN : compare.BIGGER_THAN;
}

class SortedLinkedList<T> extends LinkedList {
   private compareFn: typeof defaultCompare;

   constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
      super(equalsFn);
      this.compareFn = compareFn;
   }

   override insert(element: T, index = 0) {
      if (this.isEmpty()) {
         return super.insert(element, 0);
      }

      const pos = this.getIndexNextSortedElement(element);
      return super.insert(element, pos);
   }

   getIndexNextSortedElement(element: T) {
      let current = this._head;
      let i = 0;

      for (; i < this.size() && current; i++) {
         const comp = this.compareFn(element, current.element);

         if (comp === compare.LESS_THAN) return i;

         current = current?.next;
      }

      return i;
   }
}

export default SortedLinkedList;
