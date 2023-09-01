
function numberValidation(event) {
    if(isNaN(event.key) && event.key !== "Backspace") {
        event.preventDefault()
        return false
    }
}

function moveInputFocus(event, previousInput, currentInput, nextInput) {
    const length = document.getElementById(currentInput).value.length
    const maxLength = document.getElementById(currentInput).getAttribute("maxlength")

    // console.log(event.key)
    console.log(event)
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

    if(event.target.id === "holder-input") {
        if(event.key === "Enter") {
            document.getElementById(nextInput).focus()
        }
        
        if(event.key === "Backspace" && length == 0) {
            document.getElementById(previousInput).focus()
        }
    }

    if(event.pointerId === 0 && event.target.id === "first-expiry-input") {
        document.getElementById(nextInput).focus()
    }

    if(event.pointerId === 0 && event.target.id === "second-expiry-input") {
        document.getElementById(nextInput).focus()
    }

    if(event.key === "Backspace" && event.target.id === "cvv") {
        if(event.target.value === "") {
            document.getElementById(currentInput).focus()
        }
    }
    
}