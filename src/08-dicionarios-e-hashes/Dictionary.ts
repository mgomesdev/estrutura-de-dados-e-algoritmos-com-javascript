const defaultToString = (item: unknown) => {
   if (item === null) {
      return "NULL";
   } else if (item === undefined) {
      return "UNDEFINED";
   } else if (typeof item === "string" || item instanceof String) {
      return `${item}`;
   }
   return item.toString();
};

class Dictionary<T> {
   private toStrFn: typeof defaultToString;
   public table: { [key: string]: T };

   constructor(toStrFn = defaultToString) {
      this.toStrFn = defaultToString;
      this.table = {};
   }

   hasKey(key: string) {
      return this.table[this.toStrFn(key)] !== undefined;
   }

   set(key: string, value: T) {
      if (key !== null && value !== null) {
         const tableKey = this.toStrFn(key);

         this.table[tableKey] = new ValuePair(key, value);

         return true;
      }

      return false;
   }
}

export default Dictionary;
