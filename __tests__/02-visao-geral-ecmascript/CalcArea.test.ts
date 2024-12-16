import { circleArea, squareArea } from "../../src/02-visao-geral-esmascript/CalcArea";

describe("02 - Visão Geral ECMASCRIPT: CalcArea", () => {
   it("circleArea()", () => {
      const circle = circleArea(1);

      expect(circle).toBe(3.14);
   });

   it("squareArea()", () => {
      const square = squareArea(3);

      expect(square).toBe(9);
   });
});
