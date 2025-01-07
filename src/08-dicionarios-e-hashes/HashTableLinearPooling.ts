class HashTableLinearPooling<T> {
   private table: { [key: string]: T };

   constructor() {
      this.table = {};
   }
}

export default HashTableLinearPooling;
