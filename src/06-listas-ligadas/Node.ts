class Node<T> {
   private element: T;
   private next: undefined;

   constructor(element: T) {
      this.element = element;
      this.next = undefined;
   }
}

export default Node;
