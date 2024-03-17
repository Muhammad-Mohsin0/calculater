// class Calculator{
//     constructor(lastTextElement, currentTextElement){
//         this.lastTextElement = lastTextElement
//         this.currentTextElement = currentTextElement
//         this.clear()
//     }
//     clear(){
//         this.currentOperand= ''
//         this.lastOperand= ''
//         this.operation = undefined

//     }
//     delete(){

//     }
//     appendNumber(number){
//         if(number === '.' && this.currentOperand.includes('.')) return
//        this.currentOperand=this.currentOperand.toString() + number.toString()
//     }
//     chooseOperation(operation){

//     }
//     compute(){

//     }
//     resultDisplay(){
//         this.currentTextElement.innerText = this.currentOperand

//     }
// }

// const numberButtons=document.querySelectorAll(".number")
// const operationButtons=document.querySelectorAll(".operator")
// const equalButton=document.querySelector(".equal")
// const deleteButton=document.querySelector(".DEL")
// const allClearButton=document.querySelector(".clear")
// const lastTextElement=document.querySelector('[data-last-operand]')
// const currentTextElement=document.querySelector('[data-last-operand]')


// const calculator = new Calculator(lastTextElement,currentTextElement)

// numberButtons.forEach(button =>{
//     button.addEventListener('click', ()=>{
//         calculator.appendNumber(button.innerText)
//         calculator.resultDisplay()
//     })
// })


// operationButtons.forEach(button =>{
//     button.addEventListener('click', ()=>{
//         calculator.operationButtons(button.innerText)
//         calculator.resultDisplay()
//     })
// })















const output = document.querySelector(".result")
const inputValue = document.querySelectorAll("button")

inputValue.forEach(key=>{
    key.addEventListener("click",calculate);
});
function calculate(){
    let buttonText = this.innerText
    if (buttonText==="AC"){
        output.innerText= "0";
        return
    }
    
    if(buttonText === "="){
      output.innerText = eval(output.innerText)

    }
    else{
        output.textContent += buttonText;
        return;
    }
}
