import LinkedList from "../06-listas-ligadas/LinkedList";
import ValuePair from "./ValuePair";

class HashTableSeparateChaining<T> {
   private table: { [key: string]: T };

   constructor() {
      this.table = {};
   }

   loseloseHashCode(key: T) {
      if (typeof key === "number") return key;

      const tableKey = key as string;
      let hash = 0;

      for (let i = 0; i < tableKey.length; i++) {
         hash += tableKey.charCodeAt(i);
      }

      return hash % 37;
   }

   hashCode(key: T) {
      return this.loseloseHashCode(key);
   }

   put(key: T, value: T) {
      if (key !== null && value !== null) {
         const position = this.hashCode(key as T);

         if (this.table[position] === undefined) (this.table[position] as object) = new LinkedList();

         (this.table[position] as any).push(new ValuePair(key as string, value));
         return true;
      }

      return false;
   }
}

export default HashTableSeparateChaining;
