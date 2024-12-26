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

   pop() {
      if (this.isEmpty()) return undefined;
      return this.items.removeAt(this.size() - 1);
   }

   isEmpty() {
      return this.items.isEmpty();
   }
}

export default StackLinkedList;
