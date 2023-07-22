// Add Notes
let btn = document.querySelector(".btn-add");
let input = document.querySelector(".task-text");
let arr = [];
let counter = 0;

btn.addEventListener("click", () => {
  let element = document.createElement("div");
  let text = document.createTextNode(
    document.querySelector(".task-text").value
  );
  if (input.value.length > 0) {
    element.appendChild(text);
    element.classList.add("card");
    const taskList = document.querySelector(".task-list");
    taskList.appendChild(element);
    input.value = "";

    // Remove Note
    arr.push(element);
    arr.map((el) => {
      el.addEventListener("click", () => {
        el.remove();
      });
    });
  }
});
