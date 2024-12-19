class Node<T> {
   private element: T;
   private next: Node<T> | undefined;

   constructor(element: T) {
      this.element = element;
      this.next = undefined;
   }

   getElement() {
      return this.element;
   }
}

export default Node;
