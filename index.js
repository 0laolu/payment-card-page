
// function doo(event) {
//     if(isNaN(event.key) && event.key !== "Backspace") {
//         event.preventDefault()
//         return false
//     }
// }

// function moveInputFocus(event, previousInput, currentInput, nextInput) {
//     const length = document.getElementById(currentInput).value.length
//     const maxLength = document.getElementById(currentInput).getAttribute("maxlength")

//     console.log(event.key)
//     console.log(event)
//     if(length == maxLength) {
//         if(nextInput !== '') {
//             document.getElementById(nextInput).focus()
//         }
//     }

//     if(event.key === "Backspace" && length == 0) {
//         if(previousInput !== '') {
//             document.getElementById(previousInput).focus()
//         }
//     }

    
// }