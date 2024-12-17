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
}

export default LinkedList;
