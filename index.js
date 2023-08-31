

function foo(event, previousInput, currentInput, nextInput) {
    const length = document.getElementById(currentInput).value.length
    const maxLength = document.getElementById(currentInput).getAttribute("maxlength")

    if(length == maxLength) {
        if(nextInput !== '') {
            document.getElementById(nextInput).focus()
        }
    }

    if(event.key === "Backspace" && length == 0) {
        if(previousInput !== '') {
            document.getElementById(previousInput).focus()
        }
    }
}