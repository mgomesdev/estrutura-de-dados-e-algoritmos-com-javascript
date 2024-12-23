import LinkedList, { defaultEquals } from "./LinkedList";
import Node from "./Node";

class DoublyLinkedList extends LinkedList {
   private _tail: Node<number> | undefined;

   constructor(equalsFn = defaultEquals) {
      super(equalsFn);
      this._tail = undefined;
   }
}

export default DoublyLinkedList;
