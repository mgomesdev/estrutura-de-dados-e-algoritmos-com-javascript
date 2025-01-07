import ValuePair from "./ValuePair";

class HashTableLinearPooling<T> {
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
   put(key: string, value: T) {
      if (key !== undefined && value !== undefined) {
         const position = this.hashCode(key as T);

         if (this.table[position] === undefined) {
            (this.table[position] as object) = new ValuePair(key, value);
         } else {
            let index = position + 1;

            while (this.table[index] !== undefined) index++;

            (this.table[index] as object) = new ValuePair(key, value);
         }

         return true;
      }
      return false;
   }

   // TODO: extender e aplicar polimorfismo neste metodo.
   get(key: string) {
      const position = this.hashCode(key as T);

      if (this.table[position] !== undefined) {
         if ((this.table[position] as ValuePair<T>).key === key) return (this.table[position] as ValuePair<T>).value;

         let index = position + 1;

         while (this.table[position] !== undefined && (this.table[index] as ValuePair<T>).key !== key) index++;

         if (this.table[index] !== undefined && (this.table[index] as ValuePair<T>).key === key)
            return (this.table[position] as ValuePair<T>).value;
      }

      return undefined;
   }

   // TODO: extender e aplicar polimorfismo neste metodo.
   remove(key: string) {
      const position = this.hashCode(key as T);

      if (this.table[position] !== undefined) {
         if ((this.table[position] as ValuePair<T>).key === key) {
            delete this.table[position];
            this.verifyRemoveSideEffect(key, position);
            return true;
         }

         let index = position + 1;

         while (this.table[index] !== undefined && (this.table[index] as ValuePair<T>).key !== undefined) index++;

         if (this.table[index] !== null && (this.table[index] as ValuePair<T>).key === key) {
            delete this.table[index];
            this.verifyRemoveSideEffect(key, index);
            return true;
         }
      }

      return false;
   }

   verifyRemoveSideEffect(key: String, value: T | number) {}
}

export default HashTableLinearPooling;
