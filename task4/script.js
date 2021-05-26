const url = document.querySelector("#changeUrl");

url.addEventListener('click', (e) => {
    e.preventDefault();
    var text = prompt();
    url.textContent = text;
});