import { arrayBI, arrayMulti, forShift, forUnshift } from "../../src/03-arrays/acessando-elementos-e-iteracao-array";

describe("03 - Arrays: Acessando elementos e fazendo uma iteração em um array", () => {
   it("Iteração em um array", () => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      let result = "";

      for (let i = 0; i < days.length; i++) {
         result = days[i];
      }

      expect(result).toBe("Saturday");
   });

   it("Descobrir quais são os 20 primeiros numeros da sequencia de Fibonacci", () => {
      const fibonacci: number[] = [];
      fibonacci[1] = 1;
      fibonacci[2] = 1;

      for (let i = 3; i < 7; i++) {
         fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
      }

      let result: number[] = [];

      for (let i = 1; i < fibonacci.length; i++) {
         result = fibonacci;
      }

      expect(result).toEqual([, 1, 1, 2, 3, 5, 8]);
   });

   it("Acrescentando elementos", () => {
      const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

      const numbers2 = [...numbers];
      numbers[numbers.length] = 10;
      numbers2.push(11, 12);

      expect(numbers[numbers.length - 1]).toBe(10);
      expect(numbers2[numbers2.length - 1]).toBe(12);
   });

   it("for/unshift: Inserindo um elemento na primeira posição", () => {
      const firstPosition = forUnshift.insertFirstPosition([1, 2, 3, 4, 5], 7);
      const firstPositionWithUnshift = [...firstPosition];

      firstPositionWithUnshift.unshift(7);

      expect(firstPosition[0]).toBe(7);
      expect(firstPositionWithUnshift[0]).toBe(7);
   });

   describe("Elementos", () => {
      it("pop(): Removendo um elemento do final do array", () => {
         const removeLastPosition = [1, 2, 3, 4, 5, 6, 7];

         removeLastPosition.pop();

         expect(removeLastPosition[removeLastPosition.length - 1]).toBe(6);
      });

      it("for/shift: Removendo um elemento da primeira posição do array", () => {
         const numbers = forShift.removeFirstPosition([1, 2, 3]);
         const numbers2 = [...numbers];

         numbers2.shift();

         expect(numbers).toEqual([2, 3]);
         expect(numbers2).toEqual([3]);
      });

      it("delete/splice: Adicionando e removendo elementos de uma posição específica", () => {
         const numbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
         numbers1.splice(5, 3);

         const numbers2 = [0, 1, 2];
         delete numbers2[2];

         const numbers3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
         numbers3.splice(5, 0, 2, 3, 4);

         expect(numbers1).toEqual([0, 1, 2, 3, 4, 8, 9]);
         expect(numbers2).toEqual([0, 1]);
         expect(numbers3).toEqual([0, 1, 2, 3, 4, 2, 3, 4, 5, 6, 7, 8, 9]);
      });
   });

   describe("Arrays bidimensionais e multidimensionais", () => {
      const averageTemp: unknown[][] = [];
      averageTemp[0] = [72, 75, 79, 79, 81, 81];
      averageTemp[1] = [81, 79, 75, 75, 73, 72];

      it("Medidor de temperatura", () => {
         const averageTemp2: unknown[][] = [];
         averageTemp2[0] = [];
         averageTemp2[0][0] = 72;
         averageTemp2[0][1] = 75;
         averageTemp2[0][2] = 79;
         averageTemp2[0][3] = 79;
         averageTemp2[0][4] = 81;
         averageTemp2[0][5] = 81;

         averageTemp2[1] = [];
         averageTemp2[1][0] = 81;
         averageTemp2[1][1] = 79;
         averageTemp2[1][2] = 75;
         averageTemp2[1][3] = 75;
         averageTemp2[1][4] = 73;
         averageTemp2[1][5] = 72;

         expect(averageTemp[0]).toEqual([72, 75, 79, 79, 81, 81]);
         expect(averageTemp[1]).toEqual([81, 79, 75, 75, 73, 72]);
         expect(averageTemp2[0]).toEqual([72, 75, 79, 79, 81, 81]);
         expect(averageTemp2[1]).toEqual([81, 79, 75, 75, 73, 72]);
      });

      it("Iterando pelos elementos de arrays bidimensionais", () => {
         expect(arrayBI.printMatrix(averageTemp)).toEqual([72, 75, 79, 79, 81, 81, 81, 79, 75, 75, 73, 72]);
      });

      it("Arrays multidimensionais", () => {
         const matrix3x3x3: number[][][] = [];

         for (let i = 0; i < 3; i++) {
            matrix3x3x3[i] = [];
            for (let j = 0; j < 3; j++) {
               matrix3x3x3[i][j] = [];

               for (let z = 0; z < 3; z++) {
                  matrix3x3x3[i][j][z] = i + j + z;
               }
            }
         }

         expect(arrayMulti.printMatrix(matrix3x3x3, matrix3x3x3)).toEqual([
            0, 1, 2, 1, 2, 3, 2, 3, 4, 1, 2, 3, 2, 3, 4, 3, 4, 5, 2, 3, 4, 3, 4, 5, 4, 5, 6,
         ]);
      });
   });

   describe("Métodos de arrays em Javascript", () => {
      const isEven = (x: number) => x % 2 === 0;

      it("concat: Junta varios arrays e devolve uma copia dos arrays concatenados", () => {
         const zero = 0;
         const positiveNumbers = [1, 2, 3];
         const negativeNumbers = [-3, -2, -1];

         const numbers = negativeNumbers.concat(zero, positiveNumbers);

         expect(numbers).toEqual([...negativeNumbers, zero, ...positiveNumbers]);
      });

      it("every: itera por todos os elementos do array, verificando uma condição desejada até que [false] seja devolvido", () => {
         const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
         const numberIsEven = numbers.every(isEven);

         expect(numberIsEven).toBeFalsy();
      });

      it("some: itera por todos os elementos do array, verificando uma condição desejada até que [true] seja devolvido", () => {
         const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
         const numberIsEven = numbers.some(isEven);

         expect(numberIsEven).toBeTruthy();
      });

      it("foreach: Executa uma função especifica em cada elemento do array", () => {
         const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
         let result = false;

         numbers.forEach((x) => (result = isEven(x)));

         expect(result).toBeFalsy();
      });

      it("map: Cria outro array a partir de uma função que contem o critécio/condição e devolve os elementos do array que correspondam ao criterio.", () => {
         const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
         const myMap = numbers.map(isEven);

         expect(myMap).toEqual([
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false,
         ]);
      });

      it("filter: Cria um array com todos os elementos avaliados com true pela função especificada", () => {
         const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
         const evenNumbers = numbers.filter(isEven);

         expect(evenNumbers).toEqual([2, 4, 6, 8, 10, 12, 14]);
      });

      it("reduce: devolve um valor que será somado a um acumulador, o qual será devolvido depois que o metodo reduce parar de executar", () => {
         const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
         const numbersReduce = numbers.reduce((prev, current) => prev + current);

         expect(numbersReduce).toBe(120);
      });
   });

   describe("ES6 e as novas funcionalidades de array", () => {
      it("for...of: Iterando com o laço for...of", () => {
         const numbers = [1, 2, 3];
         let result: string;

         for (const n of numbers) {
            n % 2 === 0 ? (result = "even") : (result = "odd");
         }

         expect(result!).toBe("odd");
      });

      it("for...in: Itera sobre listas e retorna uma lista de chaves do objeto que está sendo iterado", () => {
         const numbers = [1, 2, 3];
         let result: number;

         for (const n of numbers) {
            result = n;
         }

         expect(result!).toBe(3);
      });

      it("@@iterator: devolve um objeto que contém os pares chave/valor do array/ pode ser chamado sincronamente para obter a chave/valor dos elementos do array", () => {
         const numbers = [1, 2, 3];
         const iterator = numbers[Symbol.iterator]();

         iterator.next();
         iterator.next();
         iterator.next();

         expect(iterator.next()).toEqual({ done: true, value: undefined });
      });

      it("entries: devolve @@iterator, que contém pares chave/valor", () => {
         const numbers = [1, 2, 3];
         const aEntries = numbers.entries();

         let forIterator: [number, number];

         for (const value of aEntries) {
            forIterator = value;
         }

         expect(aEntries.next().value!).toBe(undefined);
         expect(forIterator!).toEqual([2, 3]);
      });

      it("keys: devolve @@iterator, contendo as chaves do array", () => {
         const numbers = [1, 2, 3];
         const aKeys = numbers.keys();

         expect(aKeys.next()).toEqual({ value: 0, done: false });
      });

      it("values: devolve @@iterator, contendo os valores do array.", () => {
         const numbers = [1, 2, 3];
         const aValues = numbers.values();

         expect(aValues.next()).toEqual({ value: 1, done: false });
      });

      it("from: cria um novo array a apartir de um array existente", () => {
         const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
         const evens = Array.from(numbers, (x) => x % 2 === 0);

         expect(evens).toEqual([false, true, false, true, false, true, false, true, false, true]);
      });

      it("Array.of: cria um novo array a partir dos argumentos passados para o método", () => {
         const numbers3 = Array.of(1); // const numbers3 = [1];
         const numbers4 = Array.of(1, 2, 3, 4, 5, 6); // const numbers4 = [1,2,3,4,5,6];
         const numbersCopy = Array.of(...numbers4); // Array.from(numbers4);

         expect(numbers3).toEqual([1]);
         expect(numbers4).toEqual([1, 2, 3, 4, 5, 6]);
         expect(numbersCopy).toEqual([1, 2, 3, 4, 5, 6]);
      });

      it("fill: preenche o array com um valor estático", () => {
         const numbers = [0, 1, 2, 3, 4, 5, 6];

         const numbersCopy = Array.of(...numbers);
         numbersCopy.fill(0);

         const numbersCopy2 = Array.of(...numbers);
         numbersCopy2.fill(2, 1);

         const numbersCopy3 = Array.of(...numbers);
         numbersCopy3.fill(1, 3, 5);

         const ones = Array(6).fill(1);

         expect(numbersCopy).toEqual([0, 0, 0, 0, 0, 0, 0]);
         expect(numbersCopy2).toEqual([0, 2, 2, 2, 2, 2, 2]);
         expect(numbersCopy3).toEqual([0, 1, 2, 1, 1, 5, 6]);
         expect(ones).toEqual([1, 1, 1, 1, 1, 1]);
      });

      it("copyWithin: copia uma sequencia de valores do array na posição de um indice de inicio", () => {
         const numbers = [1, 2, 3, 4, 5, 6];
         const copyArray = [...numbers];
         copyArray.copyWithin(0, 3);

         const copyArray2 = [...numbers];
         copyArray2.copyWithin(1, 3, 5);

         expect(copyArray).toEqual([4, 5, 6, 4, 5, 6]);
         expect(copyArray2).toEqual([1, 4, 5, 4, 5, 6]);
      });

      describe("Ordenando elementos", () => {
         it("reverse: deixa os elementos do array fora de ordemm o ultimo item sera o primeiro e vice-versa", () => {
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
            numbers.reverse();

            expect(numbers).toEqual([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
         });

         it("sort: deixa os elementos em ordem lexicográfica e pressupoe que todos os elementos sao strings", () => {
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
            numbers.sort((a, b) => a - b);

            expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
         });

         it("Ordenação personalizada", () => {
            interface Friends {
               name: string;
               age: number;
            }

            const friends: Friends[] = [
               { name: "John", age: 30 },
               { name: "Ana", age: 20 },
               { name: "Chris", age: 25 },
            ];

            const comparePerson = (a: Friends, b: Friends) => {
               if (a.age < b.age) {
                  return -1;
               }

               if (a.age > b.age) {
                  return 1;
               }

               return 0;
            };

            const sortFriends = friends.sort(comparePerson);

            expect(sortFriends).toEqual([
               {
                  age: 20,
                  name: "Ana",
               },
               {
                  age: 25,
                  name: "Chris",
               },
               {
                  age: 30,
                  name: "John",
               },
            ]);
         });

         it("Ordenando strings", () => {
            const names = ["Ana", "ana", "john", "John"];
            const names2 = ["Maéve", "Maeve"];

            names.sort((a: string, b: string) => {
               if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) {
                  return -1;
               }

               if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) {
                  return 1;
               }

               return 0;
            });

            names2.sort((a: string, b: string) => a.localeCompare(b));

            expect(names).toEqual(["Ana", "ana", "john", "John"]);
            expect(names2).toEqual(["Maeve", "Maéve"]);
         });

         it("Pesquisa", () => {
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            numbers.push(10);

            expect(numbers.indexOf(10)).toBe(9);
            expect(numbers.indexOf(100)).toBe(-1);
            expect(numbers.lastIndexOf(10)).toBe(10);
         });
      });

      describe("ECMAScript 2015", () => {
         const multipleOf13 = (element: number, index: number, array: number[]) => element % 13 === 0;

         it("find: busca um elemento no array, dada uma condição desejada, e devolve o elemento caso seja encontrado", () => {
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

            expect(numbers.find(multipleOf13)).toBe(13);
         });
         it("findIndex: busca um elemento no array, dada uma condição desejada, e devolve o indice do elemento caso seja encontrado", () => {
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

            expect(numbers.findIndex(multipleOf13)).toBe(12);
         });

         it("includes: devolve true caso um elemento seja encontrado no array, e false caso contário", () => {
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
            const numbers2 = [7, 6, 5, 4, 3, 2, 1];

            expect(numbers.includes(15)).toBeTruthy();
            expect(numbers.includes(20)).toBeFalsy();
            expect(numbers2.includes(4, 6)).toBeFalsy();
         });

         it("toString: convertendo um array me uma string", () => {
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

            expect(numbers.toString()).toBe("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15");
            expect(numbers.join("-")).toBe("1-2-3-4-5-6-7-8-9-10-11-12-13-14-15");
         });

         it("Classe TypedArray", () => {
            const length = 5;
            const int16 = new Int16Array(length);
            const array16 = [];
            array16.length = length;

            for (let i = 0; i < length; i++) {
               int16[i] = i + 1;
            }

            expect(int16.toString()).toEqual([1, 2, 3, 4, 5].toString());
         });
      });
   });
});
