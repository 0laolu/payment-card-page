
function numberValidation(event) {
    if(isNaN(event.key) && event.key !== "Backspace") {
        event.preventDefault()
        return false
    }
}

let cardNumberArray = []

function moveInputFocus(event, previousInput, currentInput, nextInput) {
    const length = document.getElementById(currentInput).value.length
    const maxLength = document.getElementById(currentInput).getAttribute("maxlength")
    const cardDigits = document.querySelectorAll("#card-digits span")
    const cardHolder = document.querySelector(".visa-card__holder p")
    const expiryDate = document.querySelector(".visa-card__expiration p")
    const cvvNumber = document.querySelector(".visa-card__cvv p")
    console.log(expiryDate)
 
    if(!isNaN(event.key)) {
        if(event.key !== ' ') {
            cardNumberArray.push(document.getElementById(currentInput).value)
        }
    } 

    if(event.target.id === "first-input") {
        cardDigits[0].textContent = event.target.value
    } else if(event.target.id === "second-input") {
        cardDigits[1].textContent = event.target.value        
    } else if(event.target.id === "third-input") {
        cardDigits[2].textContent = event.target.value
    } else if(event.target.id === "fourth-input") {
        cardDigits[3].textContent = event.target.value
    }

    if(event.target.id === "holder-input") {
        cardHolder.textContent = event.target.value
    }


    if(event.pointerId === 0) {
        let expiryMonth = document.getElementById("first-expiry-input").value
        let expiryYear = document.getElementById("second-expiry-input").value
        
        expiryDate.textContent = `${expiryMonth} / ${expiryYear}`
    }

    if(event.target.id === "cvv") {
        cvvNumber.textContent = event.target.value
    }

    console.log(event)
    

    if(length == maxLength) {
        if(nextInput !== '') {
            document.getElementById(nextInput).focus()
        }
        cardNumberArray.push('  ')
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

