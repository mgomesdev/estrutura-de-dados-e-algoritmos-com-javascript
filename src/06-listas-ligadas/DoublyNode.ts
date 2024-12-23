import Node from "./Node";

class DoublyNode<T> {
   private _element: T;
   private _next: DoublyNode<T> | undefined;
   private _prev: DoublyNode<T> | undefined;

   constructor(element: T, next: DoublyNode<T> | undefined, prev: DoublyNode<T> | undefined) {
      this._element = element;
      this._next = next;
      this._prev = prev;
   }

   get prev() {
      return this._prev;
   }

   get next() {
      return this._next;
   }

   set prev(element: DoublyNode<T> | undefined) {
      this._prev = element;
   }

   set next(element: DoublyNode<T> | undefined) {
      this._next = element;
   }
}

export default DoublyNode;
