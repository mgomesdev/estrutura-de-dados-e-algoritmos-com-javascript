import ValuePair from "./ValuePair";

class Dictionary<T> {
   private table: { [key: string]: T };

   constructor() {
      this.table = {};
   }

   hasKey(key: string) {
      return this.table[key] !== undefined;
   }

   set(key: string, value: T) {
      if (key) {
         this.table[key] = new ValuePair(key, value) as T;
         return true;
      }

      return false;
   }

   remove(key: string) {
      if (this.hasKey(key)) {
         delete this.table[key];
         return true;
      }

      return false;
   }

   get(key: string) {
      if (key) return this.table[key];
      return undefined;
   }

   keyValues() {
      return Object.values(this.table);
   }

   keys() {
      return this.keyValues().map((valuePair) => (valuePair as typeof this.table).key);
   }
}

export default Dictionary;
