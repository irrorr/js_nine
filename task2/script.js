const consoleLog = document.querySelector("#consoleLog");
const alerts = document.querySelector("#alert");
const promptz = document.querySelector("#prompt");

consoleLog.addEventListener('click', () => {
    alert("Служит для вывода информации в консоль");
});

alerts.addEventListener('click', () => {
    alert("показывает сообщение и ждёт, пока пользователь нажмёт кнопку «ОК»");
});

promptz.addEventListener('click', () => {
   alert("Отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена"); 
});