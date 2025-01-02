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
   private table: { [key: string]: T };

   constructor(toStrFn = defaultToString) {
      this.toStrFn = defaultToString;
      this.table = {};
   }

   hasKey(key: unknown) {
      return this.table[this.toStrFn(key)] !== undefined;
   }
}

export default Dictionary;
