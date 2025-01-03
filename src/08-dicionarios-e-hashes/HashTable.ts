class HashTable<T> {
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
}

export default HashTable;
