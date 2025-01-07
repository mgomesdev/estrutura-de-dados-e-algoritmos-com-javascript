import DoublyNode from "./DoublyNode";
import Node from "./Node";

export const defaultEquals = <T>(a: T, b: T) => a === b;

class LinkedList {
   protected _count: number;
   protected _head: Node<number | unknown> | undefined;
   private _equalsFn: typeof defaultEquals;

   constructor(equalsFn = defaultEquals) {
      this._count = 0;
      this._head = undefined;
      this._equalsFn = equalsFn;
   }

   push(element: number | unknown) {
      const node = new Node(element);
      let current: Node<number | unknown> | undefined;

      if (this._head === undefined) {
         this._head = node;
      } else {
         current = this._head;

         while (current?.next !== undefined) {
            current = current?.next;
         }

         current.next = node;
      }

      this._count++;
   }

   removeAt(index: number) {
      if (index >= 0 && index < this._count) {
         let current = this._head;

         if (index === 0) {
            this._head = current?.next;
         } else {
            const previous = this.getElementAt(index - 1);
            current = previous?.next;
            previous!.next = current?.next;
         }

         this._count--;
         return current?.element;
      }

      return undefined;
   }

   remove(element: unknown) {
      const index = this.indexOf(element);
      return this.removeAt(index);
   }

   getElementAt(index: number): Node<unknown> | undefined | DoublyNode<unknown> {
      if (index >= 0 && index <= this._count) {
         let node = this._head;

         for (let i = 0; i < index && node !== null; i++) {
            node = node?.next;
         }

         return node;
      }

      return undefined;
   }

   insert(element: number | unknown, index: number): boolean | undefined {
      if (index >= 0 && index <= this._count) {
         const node = new Node(element);

         if (index === 0) {
            const current = this._head;
            node.next = current as Node<number>;
            this._head = node;
         } else {
            const previous = this.getElementAt(index - 1);
            const current = previous?.next;
            node.next = current as Node<number>;
            previous!.next = node;
         }

         this._count++;
         return true;
      }
   }

   indexOf(element: unknown) {
      let current = this._head;

      for (let i = 0; i < this._count && current !== null; i++) {
         if (this._equalsFn(element, current?.element)) return i;

         current = current?.next;
      }

      return -1;
   }

   size() {
      return this._count;
   }

   isEmpty() {
      return this.size() === 0;
   }

   getHead() {
      return this._head;
   }

   toString() {
      if (this._head === null) return "";

      let objString = `${this._head?.element}`;
      let current = this._head?.next;

      for (let i = 1; i < this.size() && current !== null; i++) {
         objString = `${objString},${current?.element}`;
         current = current?.next;
      }

      return objString;
   }
}

export default LinkedList;
