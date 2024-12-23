import Node from "./Node";

class DoublyNode<T> extends Node<T> {
   private _prev: DoublyNode<T> | undefined;

   constructor(element: number, next: DoublyNode<T> | undefined, prev: DoublyNode<T> | undefined) {
      super(element as T, next);
      this._prev = prev;
   }
}

export default DoublyNode;
