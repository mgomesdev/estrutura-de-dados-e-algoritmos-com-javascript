class ValuePair<T> {
   public key: string;
   public value: T;

   constructor(key: string, value: T) {
      this.key = key;
      this.value = value;
   }

   toString() {
      let result: string | object = `[#${this.key}]: ${this.value}`;

      if (typeof this.value === "object") {
         result = `[#${this.key}]: ${JSON.stringify(this.value)}`;
      }

      return result;
   }
}

export default ValuePair;
