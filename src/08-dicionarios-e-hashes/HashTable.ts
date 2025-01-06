import ValuePair from "./ValuePair";

class HashTable<T> {
   public table: { [key: string]: T | unknown };

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
         const position = this.hashCode(key);
         this.table[position] = new ValuePair(key as string, value);
         return true;
      }

      return false;
   }

   get(key: T) {
      const valuePair = this.table[this.hashCode(key)] as typeof this.table;
      return valuePair === undefined ? undefined : valuePair.value;
   }
}

export default HashTable;