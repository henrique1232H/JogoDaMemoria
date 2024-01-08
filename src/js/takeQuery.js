const FirstValueButtonGame = document.querySelectorAll(".grid .firstValue");
const arrayFirstValueButtonGame = Array.from(FirstValueButtonGame);

const SecondValueButtonGame = document.querySelectorAll(".grid .secondValue")
const arraySecondValueButtonGame = Array.from(SecondValueButtonGame);


export const takeQuery = {
    main: document.querySelector(".grid"),
    buttonGame: document.querySelectorAll(".grid button"),
    firstValueButtonGame: arrayFirstValueButtonGame,
    secondValueButtonGame: arraySecondValueButtonGame,
    buttonStart: document.querySelector(".startGame")
}