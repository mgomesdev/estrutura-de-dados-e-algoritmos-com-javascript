describe("JavaScript - Uma visão geral rapida", () => {
   it("Variáveis em JavaScript ES5", () => {
      var num = 1;
      num = 3;
      var price = 1.5;
      var myName = "Packt";
      var trueValue = true;
      var nullVar = null;
      var und;

      expect(num).toBe(3);
      expect(price).toBe(1.5);
      expect(myName).toBe("Packt");
      expect(trueValue).toBeTruthy();
      expect(nullVar).toBeNull();
      expect(und).toBeUndefined();
   });

   it("Operadores", () => {
      var num = 0;
      num = num + 2;
      num = num * 3;
      num = num / 2;
      num++;
      num--;
      num += 1;
      num -= 2;
      num *= 3;
      num /= 2;
      num %= 3;

      /*
      console.log("num == 1 : " + (num == 1));
      console.log("num === 1 : " + (num === 1));
      console.log("num != 1 : " + (num != 1));
      console.log("num > 1 : " + (num > 1));
      console.log("num < 1 : " + (num < 1));
      console.log("num >= 1 : " + (num >= 1));
      console.log("num <= 1 : " + (num <= 1));
      console.log("true && false : " + (true && false));
      console.log("true || false : " + (true || false));
      console.log("!true : " + !true);
   */
      expect(num).toBe(0);
   });

   it("Operadores Bit a Bit", () => {
      /*
      console.log("5 & 1:", 5 & 1);
      console.log("5 | 1:", 5 | 1);
      console.log("~ 5:", ~5);
      console.log("5 ^ 1:", 5 ^ 1);
      console.log("5 << 1:", 5 << 1);
      console.log("5 >> 1:", 5 >> 1); */
   });

   it("Operador typeof", () => {
      /*
      console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1,2,3]);
console.log('typeof {name:John}:', typeof {name:'John'}); */
   });

   it("Booleanos", () => {
      /*
       * objeto é sempre true.
       * O resultado é false para +0, -0 ou NaN; caso contrário, é true
       * O resultado é false para +0, -0 ou NaN; caso contrário, é true
       */
      var obj = { name: "John" };

      expect(true).toBeTruthy();
      expect(false).toBeFalsy;
      expect(new Boolean(false)).toBeTruthy();
      expect("").toBeFalsy();
      expect("Packt").toBeTruthy();
      expect(new String("")).toBeTruthy();
      expect(1).toBeTruthy();
      expect(-1).toBeTruthy();
      expect(NaN).toBeFalsy();
      expect(new Number(NaN)).toBeTruthy();
      expect({}).toBeTruthy();
      expect(obj).toBeTruthy();
      expect(obj.name).toBeTruthy();
   });
});
