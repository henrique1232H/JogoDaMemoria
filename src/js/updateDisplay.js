import { takeQuery } from "./takeQuery.js";


export const updateDisplay = (value, secondValue) => {

    for(let i = 0; i < 9;i++) {
        takeQuery.firstValueButtonGame[i].textContent = value[i]
    }

    for(let i = 0; i < 9;i++) {
        takeQuery.secondValueButtonGame[i].textContent = secondValue[i]
    }
    
}