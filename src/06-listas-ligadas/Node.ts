class Node<T> {
   private _element: T;
   private _next: Node<T> | undefined;

   constructor(element: T) {
      this._element = element;
      this._next = undefined;
   }

   getElement() {
      return this._element;
   }

   getNext() {
      return this._next;
   }

   setNext(next: Node<T> | undefined) {
      this._next = next;
   }
}

export default Node;
