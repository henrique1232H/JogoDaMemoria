import { RandomNumber } from "./RandomizeNumber.js";
import {checkNumber} from "./checkNumber.js";
import { takeQuery } from "./takeQuery.js";
import { updateDisplay } from "./updateDisplay.js";

const array = [1,2,3,4,5,6,7,8,9];
const arraySecond = [1,2,3,4,5,6,7,8,9];

export const start = () => {
    takeQuery.buttonStart.addEventListener("click", () => {
        let firstvalue = RandomNumber(array);
        let secondValue = RandomNumber(arraySecond);
        
        updateDisplay(firstvalue, secondValue);
        
        checkNumber(firstvalue, secondValue)
    })
}