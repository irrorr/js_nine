const textInput = document.querySelector("#textInput");
const buttonTextForm = document.querySelector("#buttonTextForm");
const duplicateField = document.querySelector("#duplicateField");

textInput.addEventListener('keyup', () => {
    duplicateField.textContent = textInput.value;
});

buttonTextForm.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(duplicateField.textContent);
    duplicateField.textContent = "";
    textInput.value = "";
});