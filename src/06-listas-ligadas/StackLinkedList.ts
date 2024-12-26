import DoublyLinkedList from "./DoublyLinkedList";

class StackLinkedList<T> {
   private items: DoublyLinkedList<T>;

   constructor() {
      this.items = new DoublyLinkedList();
   }

   size() {
      return this.items.size();
   }

   push(element: T) {
      this.items.push(element);
   }
}

export default StackLinkedList;
