import { takeQuery } from "./takeQuery.js";

let elements;
let valueOfButton

export const checkElements = () => {
    
    
    takeQuery.main.addEventListener("click", (e) => {
        elements = e.target.dataset.action;
        valueOfButton = e.target.textContent;
        
        if(typeof elements === "undefined") {
            return;
        }

        

    })

    return valueOfButton

}
