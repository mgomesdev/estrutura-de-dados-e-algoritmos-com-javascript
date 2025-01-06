import ValuePair from "./ValuePair";

class HashTable<T> {
   private table: { [key: string]: T | unknown };

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

   getTable() {
      return this.table;
   }

   remove(key: T) {
      const hash = this.hashCode(key);
      const valuePair = this.table[hash];

      if (valuePair !== undefined) {
         delete this.table[hash];
         return true;
      }

      return false;
   }

   toString() {
      if (Object.values(this.table).length === 0) return "";

      const keys = Object.keys(this.table);
      let objString = `${keys[0]} => ${(this.table[keys[0]] as object).toString()}`;

      for (let i = 1; i < keys.length; i++) {
         objString = `${objString}, ${keys[i]} => ${(this.table[keys[i]] as object).toString()}`;
      }

      return objString;
   }
}

export default HashTable;
