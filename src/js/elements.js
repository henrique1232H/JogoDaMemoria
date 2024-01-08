import { takeQuery } from "./takeQuery.js";

export const checkElements = () => {
    takeQuery.main.addEventListener("click", (e) => {
        const elements = e.target.dataset.action;

        if(typeof elements === "undefined") {
            return;
        }
        
    })

}