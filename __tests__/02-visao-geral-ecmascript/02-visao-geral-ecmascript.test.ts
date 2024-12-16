import Book from "../../src/02-visao-geral-esmascript/Book";
import ITBook from "../../src/02-visao-geral-esmascript/ITBook";
import { circleArea, squareArea } from "../../src/02-visao-geral-esmascript/CalcArea";

describe("Visão geral do ECMAScript 2015+ (es6)", () => {
   it("Variaveis com let e const", () => {
      var framework = "Angular";
      var framework = "React";

      //      let language = "JavaScript";
      let language = "Ruby!";

      const PI = 3.141593;
      // PI = 3.0; //lança um erro

      const jsFramework = {
         name: "Angular",
      };

      jsFramework.name = "React";

      expect(framework).toBe("React");
      expect(language).toBe("Ruby!");
      expect(jsFramework.name).toBe("React");
   });

   it("Escopo de variaveis com let e const", () => {
      let movie = "Lord of the Rings"; // {1}
      //var movie = 'Batman v Superman'; // erro, movie já foi declarada

      function starWarsFan() {
         const movie = "Star Wars"; // {2}
         return movie;
      }

      function marvelFan() {
         movie = "The Avengers"; // {3}
         return movie;
      }

      function blizzardFan() {
         const isFan = true;
         let phrase = "Warcraft";

         if (isFan) {
            let phrase = "initial text"; // {5}
            phrase = "For the Horde!"; // {6}

            return `Inside if: ${phrase}`;
         }
         phrase = "For the Alliance!"; // {7}

         return `After if: ${phrase}`;
      }

      expect(movie).toBe("Lord of the Rings");
      expect(starWarsFan()).toBe("Star Wars");
      expect(marvelFan()).toBe("The Avengers");
      expect(blizzardFan()).toBe("Inside if: For the Horde!");
   });

   it("Templates literais", () => {
      const book = {
         name: "Learning JavaScript DataStructures and Algorithms",
      };

      let reading = `You are reading ${book.name}.,
and this is a new line
and so is this.`;

      expect(reading).toBe(`You are reading ${book.name}.,
and this is a new line
and so is this.`);
   });

   it("Arrow functions", () => {
      const circleArea = (r: number) => {
         const PI = 3.14;
         const area = PI * r * r;
         return area;
      };

      circleArea(2);

      const hello = () => "hello";

      const sum = (x = 1, y = 2, z = 3) => x + y + z;

      /*
      function a(x) {
        arguments[0]
      } */

      expect(circleArea(2)).toBe(12.56);
      expect(hello()).toBe("hello");
      expect(sum()).toBe(6);
   });

   it("Operadores Rest e Spread", () => {
      const sum = (x = 1, y = 2, z = 3) => x + y + z;

      let params = [3, 4, 5];

      // Spread operator
      expect(sum(...params)).toBe(12);
      expect(sum.apply(params)).toBe(6);
   });

   it("Desestruturação de array", () => {
      let [x, y] = ["a", "b"];

      // let x = a;
      // let y = b;

      expect(x).toBe("a");
      expect(y).toBe("b");
   });

   it("Abreviação de propriedades", () => {
      const [x, y] = ["a", "b"];

      let obj = { x, y };

      expect(JSON.stringify(obj)).toBe(JSON.stringify({ x: "a", y: "b" }));
   });

   it("Nomes de métodos abreviados", () => {
      const hello = {
         name: "abcdef",
         printHello: () => "Hello",
      };

      expect(hello.printHello()).toBe("Hello");
   });

   describe("POO com Classes", () => {
      it("Classes", () => {
         let book = new Book("title", 1, true);
         expect(book.title).toBe("title");

         book.title = "new title";
         expect(book.title).toBe("new title");
      });

      it("Herança", () => {
         let jsBook = new ITBook("Learning JS Algorithms", 200, true, "JavaScript");

         expect(jsBook.title).toBe("Learning JS Algorithms");
         expect(jsBook.printTecnology()).toBe("JavaScript");
      });

      it("Getters e setters", () => {
         class Person {
            private _name: string;

            constructor(name: string) {
               this._name = name;
            }

            get name() {
               return this._name;
            }

            set name(value: string) {
               this._name = value;
            }
         }

         let lotrChar = new Person("Frodo");
         expect(lotrChar.name).toBe("Frodo");

         lotrChar.name = "Gandalf";

         expect(lotrChar.name).toBe("Gandalf");
      });
   });

   it("Operador exponencial", () => {
      const r = 1;
      let area = 3.14 * r * r;

      area = 3.14 * Math.pow(r, 2);

      area = 3.14 * r ** 2;
   });

   it("Modulos", () => {
      const circle = circleArea(1);
      const square = squareArea(3);

      expect(circle).toBe(3.14);
      expect(square).toBe(9);
   });
});
