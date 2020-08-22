var digits = 0;
var attempts = 0;
var hints = 0;

const settingsAccept = () => {
    /* Digits of randomised number */
    var digitSelection1 = document.getElementById("digit1");
    var digitSelection2 = document.getElementById("digit2");
    var digitSelection3 = document.getElementById("digit3");
    /* Number of lives allowed */
    var attemptSelection1 = document.getElementById("attempt1");
    var attemptSelection2 = document.getElementById("attempt2");
    var attemptSelection3 = document.getElementById("attempt3");
    /* Severity of hints issued */ 
    var hintSelection1 = document.getElementById("hint1");
    var hintSelection2 = document.getElementById("hint2");
    var hintSelection3 = document.getElementById("hint3");
    /* Summarisation */
    var confirmationTitle = document.getElementById("confirmation_header");
    var confirmationText = document.getElementById("confirmation_text");
    var confirmationButtonLeft = document.getElementById("confirmation_button_left");
    var confirmationButtonRight = document.getElementById("confirmation_button_right");
    
    if((digitSelection1.checked) && (attemptSelection1.checked) && (hintSelection3.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 1 digit number, having 3 attempts to do so, with no hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 1; // Minimal
        attempts = 1; // Minimal
        hints = 1 // Minimal
    } else if((digitSelection1.checked) && (attemptSelection1.checked) && (hintSelection2.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 1 digit number, having 3 attempts to do so, with moderate hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 1; // Minimal
        attempts = 1; // Minimal
        hints = 2 // Moderate
    } else if((digitSelection1.checked) && (attemptSelection1.checked) && (hintSelection1.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 1 digit number, having 3 attempts to do so, with detailed hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 1; // Minimal
        attempts = 1; // Minimal
        hints = 3 // Maximum
    } else if((digitSelection1.checked) && (attemptSelection2.checked) && (hintSelection3.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 1 digit number, having 5 attempts to do so, with no hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 1; // Minimal
        attempts = 2; // Moderate
        hints = 1 // Minimal
    } else if((digitSelection1.checked) && (attemptSelection2.checked) && (hintSelection2.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 1 digit number, having 5 attempts to do so, with moderate hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 1; // Minimal
        attempts = 2; // Moderate
        hints = 2 // Moderate
    } else if((digitSelection1.checked) && (attemptSelection2.checked) && (hintSelection1.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 1 digit number, having 5 attempts to do so, with detailed hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 1; // Minimal
        attempts = 2; // Moderate
        hints = 3 // Maximum
    } else if((digitSelection1.checked) && (attemptSelection3.checked) && (hintSelection3.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 1 digit number, having 10 attempts to do so, with no hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 1; // Minimal
        attempts = 3; // Maximum
        hints = 1 // Minimal
    } else if((digitSelection1.checked) && (attemptSelection3.checked) && (hintSelection2.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 1 digit number, having 10 attempts to do so, with moderate hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 1; // Minimal
        attempts = 3; // Maximum
        hints = 2 // Moderate
    } else if((digitSelection1.checked) && (attemptSelection3.checked) && (hintSelection1.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 1 digit number, having 10 attempts to do so, with detailed hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 1; // Minimal
        attempts = 3; // Maximum
        hints = 3 // Maximum
    } else if((digitSelection2.checked) && (attemptSelection1.checked) && (hintSelection3.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 2 digit number, having 3 attempts to do so, with no hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 2; // Moderate
        attempts = 1; // Minimal
        hints = 1 // Minimal
    } else if((digitSelection2.checked) && (attemptSelection1.checked) && (hintSelection2.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 2 digit number, having 3 attempts to do so, with moderate hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 2; // Moderate
        attempts = 1; // Minimal
        hints = 2 // Moderate
    } else if((digitSelection2.checked) && (attemptSelection1.checked) && (hintSelection1.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 2 digit number, having 3 attempts to do so, with detailed hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 2; // Moderate
        attempts = 1; // Minimal
        hints = 3 // Maximum
    } else if((digitSelection2.checked) && (attemptSelection2.checked) && (hintSelection3.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 2 digit number, having 5 attempts to do so, with no hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 2; // Moderate
        attempts = 2; // Moderate
        hints = 1 // Minimal
    } else if((digitSelection2.checked) && (attemptSelection2.checked) && (hintSelection2.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 2 digit number, having 5 attempts to do so, with moderate hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 2; // Moderate
        attempts = 2; // Moderate
        hints = 2 // Moderate
    } else if((digitSelection2.checked) && (attemptSelection2.checked) && (hintSelection1.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 2 digit number, having 5 attempts to do so, with detailed hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 2; // Moderate
        attempts = 2; // Moderate
        hints = 3 // Maximum
    } else if((digitSelection2.checked) && (attemptSelection3.checked) && (hintSelection3.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 2 digit number, having 10 attempts to do so, with no hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 2; // Moderate
        attempts = 3; // Maximum
        hints = 1 // Minimal
    } else if((digitSelection2.checked) && (attemptSelection3.checked) && (hintSelection2.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 2 digit number, having 10 attempts to do so, with moderate hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 2; // Moderate
        attempts = 3; // Maximum
        hints = 2 // Moderate
    } else if((digitSelection2.checked) && (attemptSelection3.checked) && (hintSelection1.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 2 digit number, having 10 attempts to do so, with detailed hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 2; // Moderate
        attempts = 3; // Maximum
        hints = 3 // Maximum
    } else if((digitSelection3.checked) && (attemptSelection1.checked) && (hintSelection3.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 3 digit number, having 3 attempts to do so, with no hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 3; // Maximum
        attempts = 1; // Minimal
        hints = 1 // Minimal
    } else if((digitSelection3.checked) && (attemptSelection1.checked) && (hintSelection2.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 3 digit number, having 3 attempts to do so, with moderate hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 3; // Maximum
        attempts = 1; // Minimal
        hints = 2 // Moderate
    } else if((digitSelection3.checked) && (attemptSelection1.checked) && (hintSelection1.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 3 digit number, having 3 attempts to do so, with detailed hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 3; // Maximum
        attempts = 1; // Minimal
        hints = 3 // Maximum
    } else if((digitSelection3.checked) && (attemptSelection2.checked) && (hintSelection3.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 3 digit number, having 5 attempts to do so, with no hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 3; // Maximum
        attempts = 2; // Moderate
        hints = 1 // Minimal
    } else if((digitSelection3.checked) && (attemptSelection2.checked) && (hintSelection2.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 3 digit number, having 5 attempts to do so, with moderate hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 3; // Maximum
        attempts = 2; // Moderate
        hints = 2 // Moderate
    } else if((digitSelection3.checked) && (attemptSelection2.checked) && (hintSelection1.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 3 digit number, having 5 attempts to do so, with detailed hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 3; // Maximum
        attempts = 2; // Moderate
        hints = 3 // Maximum
    } else if((digitSelection3.checked) && (attemptSelection3.checked) && (hintSelection3.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 3 digit number, having 10 attempts to do so, with no hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 3; // Maximum
        attempts = 3; // Maximum
        hints = 1 // Minimal
    } else if((digitSelection3.checked) && (attemptSelection3.checked) && (hintSelection2.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 3 digit number, having 10 attempts to do so, with moderate hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 3; // Maximum
        attempts = 3; // Maximum
        hints = 2 // Moderate
    } else if((digitSelection3.checked) && (attemptSelection3.checked) && (hintSelection1.checked)) {
        confirmation_header.innerHTML = "Confirmation";
        confirmationText.innerHTML = "You will be guessing a 3 digit number, having 10 attempts to do so, with detailed hints. Sound correct?";
        confirmationButtonLeft.style.display = "inline-block";
        confirmationButtonRight.style.display = "inline-block";
        digits = 3; // Maximum
        attempts = 3; // Maximum
        hints = 3 // Maximum
    } else {
        alert("Insufficient Game Customization, please try again!")
        settingsReset()
    }
}

const settingsReset = () => {
        /* Digits of randomised number */
    var digitSelection1 = document.getElementById("digit1");
    var digitSelection2 = document.getElementById("digit2");
    var digitSelection3 = document.getElementById("digit3");
    /* Number of lives allowed */
    var attemptSelection1 = document.getElementById("attempt1");
    var attemptSelection2 = document.getElementById("attempt2");
    var attemptSelection3 = document.getElementById("attempt3");
    /* Severity of hints issued */ 
    var hintSelection1 = document.getElementById("hint1");
    var hintSelection2 = document.getElementById("hint2");
    var hintSelection3 = document.getElementById("hint3");
    /* Summarisation */
    var confirmationTitle = document.getElementById("confirmation_header");
    var confirmationText = document.getElementById("confirmation_text");
    var confirmationButtonLeft = document.getElementById("confirmation_button_left");
    var confirmationButtonRight = document.getElementById("confirmation_button_right");
    
    digitSelection1.checked = false;
    digitSelection2.checked = false;
    digitSelection3.checked = false;
    attemptSelection1.checked = false;
    attemptSelection2.checked = false;
    attemptSelection3.checked = false;
    hintSelection1.checked = false;
    hintSelection2.checked = false;
    hintSelection3.checked = false;
    confirmationTitle.innerHTML = "";
    confirmationText.innerHTML = "";
    confirmationButtonLeft.style.display = "none";
    confirmationButtonRight.style.display = "none";
}

const settingsGenerateGame = () => {
    
}