import HashTable from "./HashTable";
import ValuePair from "./ValuePair";

class HashTableLinearPooling<T> extends HashTable<T> {
   constructor() {
      super();
   }

   djb2HashCode(key: T) {
      const tableKey = String(key);
      let hash = 5381;

      for (let i = 0; i < tableKey.length; i++) {
         hash = hash * 33 + tableKey.charCodeAt(i);
      }

      return hash % 1013;
   }

   hashCode(key: T) {
      return this.djb2HashCode(key);
   }

   override put(key: T, value: T) {
      if (key !== undefined && value !== undefined) {
         const position = this.hashCode(key as T);

         if (this.table[position] === undefined) {
            this.table[position] = new ValuePair(String(key), value);
         } else {
            let index = position + 1;

            while (this.table[index] !== undefined) index++;

            (this.table[index] as object) = new ValuePair(String(key), value);
         }

         return true;
      }
      return false;
   }

   override get(key: T) {
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

   override remove(key: T) {
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

   /*
    * TODO: criar os testes deste método.
    *
    * verifyRemoveSideEffect(key, removedPosition):
    *   - verifica se há elementos com o mesmo hash em uma position diferente
    *   - e se a remoção tem algum efeito colateral.
    *
    */
   verifyRemoveSideEffect(key: T, removedPosition: number) {
      const hash = this.hashCode(key as T);
      let index = removedPosition + 1;

      while (this.table[index] !== undefined) {
         const posHash = this.hashCode((this.table[index] as ValuePair<T>).key as T);

         if (posHash <= hash || posHash <= removedPosition) {
            this.table[removedPosition] = this.table[index];
            delete this.table[index];
            removedPosition = index;
         }

         index++;
      }
   }
}

export default HashTableLinearPooling;
