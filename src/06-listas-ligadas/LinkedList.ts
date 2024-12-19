import Node from "./Node";

const defaultEquals = <T>(a: T, b: T) => a === b;

class LinkedList {
   public count: number;
   public head: Node<number> | undefined;
   private equalsFn: typeof defaultEquals;

   constructor(equalsFn = defaultEquals) {
      this.count = 0;
      this.head = undefined;
      this.equalsFn = equalsFn;
   }

   push(element: number) {
      const node = new Node(element);
      let current: Node<number> | undefined;

      if (this.head === undefined) {
         this.head = node;
      } else {
         current = this.head;

         while (current.next !== undefined) {
            current = current.next;
         }

         current.next = node;
      }

      this.count++;
   }

   removeAt(index: number) {
      if (index >= 0 && index < this.count) {
         let current = this.head;

         if (index === 0) {
            this.head = current?.next;
         } else {
            let previous;

            for (let i = 0; i < index; i++) {
               previous = current;
               current = current?.next;
            }

            previous!.next = current?.next;
         }

         this.count--;
         return current?.element;
      }

      return undefined;
   }
}

export default LinkedList;
