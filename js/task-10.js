const input = document.querySelector("input");
const add = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
console.log(input);
console.log(add);
console.log(destroy);
console.log(boxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
add.addEventListener("click", onClick);
/** виносимо змінну в глобальну
 * область видимості щоб не перестворювати і бцдцвалось не з самого початку*/
let size = 30;
function onClick() {
  const total = input.value;

  let markup = [];
  for (let i = 1; i <= total; i += 1) {
    size += 10;
    //   markup += `<div></div>`;
    const div = document.createElement("div");
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.backgroundColor = getRandomHexColor();
    markup.push(div);
  }
  boxes.append(...markup);
}
destroy.addEventListener("click", onDestroy);
function onDestroy() {
  boxes.innerHTML = "";
  input.value = "";
}
