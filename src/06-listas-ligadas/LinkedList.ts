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
            const previous = this.getElementAt(index - 1);
            current = previous?.next;
            previous!.next = current?.next;
         }

         this.count--;
         return current?.element;
      }

      return undefined;
   }

   getElementAt(index: number) {
      if (index >= 0 && index <= this.count) {
         let node = this.head;

         for (let i = 0; i < index && node !== null; i++) {
            node = node?.next;
         }

         return node;
      }

      return undefined;
   }

   insert(element: number, index: number) {
      if (index >= 0 && index <= this.count) {
         const node = new Node(element);

         if (index === 0) {
            const current = this.head;
            node.next = current;
            this.head = node;
         } else {
            const previous = this.getElementAt(index - 1);
            const current = previous?.next;
            node.next = current;
            previous!.next = node;
         }

         this.count++;
         return true;
      }
   }
}

export default LinkedList;
