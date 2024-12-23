class Node<T> {
   private _element: T;
   private _next: Node<T> | undefined;

   constructor(element: T, next: Node<T> | undefined = undefined) {
      this._element = element;
      this._next = next;
   }

   get element() {
      return this._element;
   }

   get next() {
      return this._next;
   }

   set next(next: Node<T> | undefined) {
      this._next = next;
   }
}

export default Node;
