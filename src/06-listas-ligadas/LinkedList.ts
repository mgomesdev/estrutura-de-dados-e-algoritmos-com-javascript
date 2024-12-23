import Node from "./Node";

export const defaultEquals = <T>(a: T, b: T) => a === b;

class LinkedList {
   private count: number;
   private head: Node<number> | undefined;
   private equalsFn: typeof defaultEquals;

   constructor(equalsFn = defaultEquals) {
      this.count = 0;
      this.head = undefined;
      this.equalsFn = equalsFn;
   }

   push(element: number) {
      const node = new Node(element);
      let current: Node<number> | undefined;

      if (this.head === undefined) {
         this.head = node;
      } else {
         current = this.head;

         while (current?.next !== undefined) {
            current = current?.next;
         }

         current.next = node;
      }

      this.count++;
   }

   removeAt(index: number) {
      if (index >= 0 && index < this.count) {
         let current = this.head;

         if (index === 0) {
            this.head = current?.next;
         } else {
            const previous = this.getElementAt(index - 1);
            current = previous?.next;
            previous!.next = current?.next;
         }

         this.count--;
         return current?.element;
      }

      return undefined;
   }

   remove(element: number) {
      const index = this.indexOf(element);
      return this.removeAt(index);
   }

   getElementAt(index: number) {
      if (index >= 0 && index <= this.count) {
         let node = this.head;

         for (let i = 0; i < index && node !== null; i++) {
            node = node?.next;
         }

         return node;
      }

      return undefined;
   }

   insert(element: number, index: number) {
      if (index >= 0 && index <= this.count) {
         const node = new Node(element);

         if (index === 0) {
            const current = this.head;
            node.next = current;
            this.head = node;
         } else {
            const previous = this.getElementAt(index - 1);
            const current = previous?.next;
            node.next = current;
            previous!.next = node;
         }

         this.count++;
         return true;
      }
   }

   indexOf(element: number) {
      let current = this.head;

      for (let i = 0; i < this.count && current !== null; i++) {
         if (this.equalsFn(element, current?.element)) return i;

         current = current?.next;
      }

      return -1;
   }

   size() {
      return this.count;
   }

   isEmpty() {
      return this.size() === 0;
   }

   getHead() {
      return this.head;
   }

   toString() {
      if (this.head === null) return "";

      let objString = `${this.head?.element}`;
      let current = this.head?.next;

      for (let i = 1; i < this.size() && current !== null; i++) {
         objString = `${objString},${current?.element}`;
         current = current?.next;
      }

      return objString;
   }
}

export default LinkedList;
