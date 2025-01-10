import LinkedList from "../06-listas-ligadas/LinkedList";
import Node from "../06-listas-ligadas/Node";
import HashTable from "./HashTable";
import ValuePair from "./ValuePair";

class HashTableSeparateChaining<T> extends HashTable<T> {
   constructor() {
      super();
   }

   override put(key: T, value: T) {
      if (key !== null && value !== null) {
         const position = this.hashCode(key as T);

         if (this.table[position] === undefined) this.table[position] = new LinkedList();

         (this.table[position] as LinkedList).push(new ValuePair(key as string, value));

         return true;
      }

      return false;
   }

   override get(key: string | T) {
      const position = this.hashCode(key as T);
      const linkedList = this.table[position] as LinkedList;

      if (linkedList !== undefined && !linkedList.isEmpty()) {
         let current = linkedList.getHead() as Node<ValuePair<T>>;

         while (current !== undefined) {
            if (current.element.key === key) return current.element.value;

            current = (current as Node<ValuePair<T>>).next as Node<ValuePair<T>>;
         }
      }

      return undefined;
   }

   override remove(key: string | T) {
      const position = this.hashCode(key as T);
      const linkedList = this.table[position] as LinkedList;

      if (linkedList !== undefined && !linkedList.isEmpty()) {
         let current = linkedList.getHead() as Node<ValuePair<T>>;

         while (current !== undefined) {
            if (current.element.key === key) {
               linkedList.remove(current.element);

               if (linkedList.isEmpty()) delete this.table[position];

               return true;
            }

            current = (current as Node<ValuePair<T>>).next as Node<ValuePair<T>>;
         }

         return false;
      }
   }
}

export default HashTableSeparateChaining;
