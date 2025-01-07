import LinkedList from "../06-listas-ligadas/LinkedList";
import Node from "../06-listas-ligadas/Node";
import ValuePair from "./ValuePair";

class HashTableSeparateChaining<T> {
   private table: { [key: string]: T };

   constructor() {
      this.table = {};
   }

   // TODO: eliminar este metodo através de herança.
   loseloseHashCode(key: T) {
      if (typeof key === "number") return key;

      const tableKey = key as string;
      let hash = 0;

      for (let i = 0; i < tableKey.length; i++) {
         hash += tableKey.charCodeAt(i);
      }

      return hash % 37;
   }

   // TODO: eliminar este metodo através de herança.
   hashCode(key: T) {
      return this.loseloseHashCode(key);
   }

   // TODO: extender e aplicar polimorfismo neste metodo.
   put(key: T, value: T) {
      if (key !== null && value !== null) {
         const position = this.hashCode(key as T);

         if (this.table[position] === undefined) (this.table[position] as object) = new LinkedList();

         (this.table[position] as LinkedList).push(new ValuePair(key as string, value));

         return true;
      }

      return false;
   }

   // TODO: extender e aplicar polimorfismo neste metodo.
   get(key: string) {
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

   // TODO: extender e aplicar polimorfismo neste metodo.
   remove(key: string) {
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
