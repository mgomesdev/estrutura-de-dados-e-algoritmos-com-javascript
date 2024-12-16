import Deque from "./Deque";
import Queue from "./Queue";

const ExerciciosFilasDeques = {
   hotPotato: <T>(elementsList: T[], num: number) => {
      const queue = new Queue();
      const elimatedList: T[] = [];

      for (let i = 0; i < elementsList.length; i++) {
         queue.enqueue(elementsList[i]);
      }

      while (queue.size() > 1) {
         for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
         }

         elimatedList.push(queue.dequeue() as T);
      }

      return {
         eliminated: elimatedList,
         winner: queue.dequeue(),
      };
   },

   palindromeChecker(aString: string) {
      if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) return false;

      const deque = new Deque();
      const loweString = aString.toLocaleLowerCase().split(" ").join("");
      let isEqual = true;
      let firstChar;
      let lastChar;

      for (let i = 0; i < loweString.length; i++) {
         deque.addBack(loweString.charAt(i));
      }

      while (deque.size() > 1 && isEqual) {
         firstChar = deque.removeFront();
         lastChar = deque.removeBack();

         if (firstChar !== lastChar) isEqual = false;
      }

      return isEqual;
   },
};

export default ExerciciosFilasDeques;
