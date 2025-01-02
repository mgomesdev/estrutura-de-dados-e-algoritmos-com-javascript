const defaultToString = () => null;

class Dictionary {
   private toStrFn: typeof defaultToString;
   private table: object;

   constructor(toStrFn = defaultToString) {
      this.toStrFn = defaultToString;
      this.table = {};
   }
}

export default Dictionary;
