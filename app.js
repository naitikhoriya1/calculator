const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    switch (buttonText) {
      case "AC":
        inputBox.value = "";
        break;
      case "DEL":
        inputBox.value = inputBox.value.slice(0, -1);
        break;
      case "=":
        try {
          inputBox.value = eval(inputBox.value);
        } catch (error) {
          inputBox.value = "Error";
        }
        break;
      default:
        // Handle numeric input, operators, and decimal point
        if (/[\d.]/.test(buttonText)) {
          inputBox.value += buttonText;
        } else if (/\d/.test(buttonText) && inputBox.value === "Error") {
          // Clear "Error" if a new number is entered after an error
          inputBox.value = buttonText;
        } else if (/[/+*%-]/.test(buttonText)) {
          const lastChar = inputBox.value.charAt(inputBox.value.length - 1);

          if (!/[/+*-]/.test(lastChar)) {
            inputBox.value += buttonText;
          } else {
            // Replace the last operator with the new one
            inputBox.value = inputBox.value.slice(0, -1) + buttonText;
          }
        }
    }
  });
});
