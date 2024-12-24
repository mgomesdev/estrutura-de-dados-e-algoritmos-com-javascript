import DoublyNode from "./DoublyNode";
import LinkedList, { defaultEquals } from "./LinkedList";

class DoublyLinkedList<T> extends LinkedList {
   protected _head: DoublyNode<T> | undefined;
   private _tail: DoublyNode<T> | undefined;

   constructor(equalsFn = defaultEquals) {
      super(equalsFn);
      this._tail = undefined;
   }

   override insert(element: T, index: number) {
      if (index >= 0 && index <= this._count) {
         const node = new DoublyNode(element, undefined, undefined);
         let current = this._head as DoublyNode<T>;

         if (index === 0) {
            if (this._head === undefined) {
               this._head = node;
               this._tail = node;
            } else {
               node.next = this._head;
               this._head.prev = node;
               this._head = node;
            }
         } else if (index === this._count) {
            current = this._tail as DoublyNode<T>;
            current.next = node;
            node.prev = current;
            this._tail = node;
         } else {
            const previous = this.getElementAt(index - 1) as DoublyNode<T>;
            current = previous.next as DoublyNode<T>;
            node.next = current;
            previous.next = node;
            current.prev = node;
            node.prev = previous;
         }

         this._count++;
         return true;
      }
      return false;
   }

   override getElementAt(index: number) {
      if (index >= 0 && index < this._count) {
         let node = this._head;
         for (let i = 0; i < index && node !== undefined; i++) {
            node = node.next;
         }
         return node;
      }
      return undefined;
   }
}

export default DoublyLinkedList;
