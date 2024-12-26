import LinkedList, { defaultEquals } from "./LinkedList";
import Node from "./Node";

class CircularLinkedList<T> extends LinkedList {
   constructor(equalsFn = defaultEquals) {
      super(equalsFn);
   }

   override insert(element: T, index: number) {
      if (index >= 0 && index <= this._count) {
         const node = new Node(element);
         let current = this._head;

         if (index === 0) {
            if (this._head === undefined) {
               this._head = node;
               node.next = this._head as Node<T>;
            } else {
               node.next = current as Node<T>;
               current = this.getElementAt(this.size());
               this._head = node;
               current!.next = this._head as Node<T>;
            }
         } else {
            const previous = this.getElementAt(index - 1);
            node.next = previous?.next as Node<T>;
            previous!.next = node as Node<T>;
         }

         this._count++;
         return true;
      }

      return false;
   }

   override removeAt(index: number) {
      if (index >= 0 && index < this._count) {
         let current = this._head;

         if (index === 0) {
            if (this.size() === 1) {
               this._head = undefined;
            } else {
               const removed = this._head;
               current = this.getElementAt(this.size());
               this._head = this._head?.next;
               current!.next = this._head as Node<T>;
               current = removed;
            }
         } else {
            const previous = this.getElementAt(index - 1);
            current = previous?.next;
            previous!.next = current?.next as Node<T>;
         }
         this._count--;
         return current?.element;
      }

      return undefined;
   }
}

export default CircularLinkedList;
