import { checkElements } from "./elements.js"
import { takeQuery } from "./takeQuery.js";

export const checkNumber = (firstValue,secondValue, elements) => {
    let arrayTotalNumbers = [];

    for(let i = 0; i < firstValue.length;i++) {
        arrayTotalNumbers.push(firstValue[i]);
        arrayTotalNumbers.push(secondValue[i]);
    }

    

    console.log(arrayTotalNumbers)
    
}