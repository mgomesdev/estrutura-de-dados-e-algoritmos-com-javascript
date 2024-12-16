import { forUnshift, forShift, arrayBI, arrayMulti } from "../../src/03-arrays/acessando-elementos-e-iteracao-array";

describe("03 - Arrays", () => {
   describe("Por que devemos usar arrays?", () => {
      it("Temperatura média de cada mês do ano para a cidade em que vivemos", () => {
         const averageTempJan = 31.9;
         const averageTempFeb = 35.9;
         const averageTempMar = 41.9;
         const averageTempApr = 51.9;
         const averageTempMay = 61.9;

         const averageTemp: number[] = [];
         averageTemp[0] = averageTempJan;
         averageTemp[1] = averageTempFeb;
         averageTemp[2] = averageTempMar;
         averageTemp[3] = averageTempApr;
         averageTemp[4] = averageTempMay;

         expect(averageTempJan).toBe(31.9);
         expect(averageTempFeb).toBe(35.9);
         expect(averageTempMar).toBe(41.9);
         expect(averageTempApr).toBe(51.9);
         expect(averageTempMay).toBe(61.9);
         expect(averageTemp).toEqual([31.9, 35.9, 41.9, 51.9, 61.9]);
      });

      it("Criando e inicializando arrays", () => {
         const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

         let daysOfWeek = new Array();
         daysOfWeek = new Array(7);
         daysOfWeek = new Array(...days);

         let daysOfWeekRecommended: string[] = [];
         daysOfWeekRecommended = days;

         expect(daysOfWeek).toEqual(days);
         expect(daysOfWeekRecommended).toEqual(days);
         expect(daysOfWeekRecommended.length).toBe(7);
      });
   });
});
