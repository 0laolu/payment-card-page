# Card Payment Page

## Objective
> A static card payment page where a user can fill in their details and make an online payment or purchase with their credit card

## Features 
### Interface
- Card Number must be in numbers and not less than 16 digits
- Card Holder must be at least first name and last name. You can include other names
- Expiration date - month must be a drop-down of the months, and year must be a drop-down
  - The selected date must be in the future.
- CVV must be numbers
  - CVV must not be more than four and not less than three numbers

### Functionality 

When entering the card number: <br />
- The fifth number should appear in the next field after the first four numbers without clicking to go to the next box. <br />
This means the user should be able to keep entering the number without using the tab button or clicking to focus on the next box. <br />
- On entering the numbers, change the card's logo to either Visa, MasterCard or American Express Logo. 
- As the user enters the cardholder's name, show the name under the cardholder part of the card above the input fields. <br />
If the user deletes any aspect of their input, ensure to show that in the cardholder part of the card.
- Show the card expiration date on the card expiration part of the card just as you have done for the cardholder's part. 
- On clicking submit, an alert should say, "Your payment was successful." Make sure all items are validated before showing the alert.
<br />

## Tech stack
JavaScript, CSS3, HTML5

## Live URL
- [Card Payment Page](0laolu.github.io/payment-card-page/)
