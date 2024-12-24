import Node from "./Node";

class DoublyNode<T> extends Node<T> {
   private _prev: DoublyNode<T> | undefined;

   constructor(element: T, next: DoublyNode<T> | undefined, prev: DoublyNode<T> | undefined) {
      super(element, next);
      this._prev = prev;
   }

   get prev() {
      return this._prev;
   }

   get next() {
      return this._next as DoublyNode<T>;
   }

   set prev(element: DoublyNode<T> | undefined) {
      this._prev = element;
   }

   set next(element: DoublyNode<T> | undefined) {
      this._next = element;
   }
}

export default DoublyNode;
