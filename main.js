// Elements
let btn = document.querySelector(".btn-add");
let input = document.querySelector(".task-text");
let arr = [];
let count = 0;
let total = document.querySelector("#total");

// Click Event
btn.addEventListener("click", () => {
  let element = document.createElement("div");
  let text = document.createTextNode(
    document.querySelector(".task-text").value
  );

  if (input.value.length > 0) {
    // Adding Note
    element.appendChild(text);
    element.classList.add("card");
    const taskList = document.querySelector(".task-list");
    taskList.appendChild(element);

    // Reset Input Value
    input.value = "";

    // Increase Total Counter
    arr.push(element);
    total.textContent = arr.length;

    // Remove Note
    arr.map((el) => {
      el.addEventListener("click", () => {
        el.remove();
      });
    });

    // Click Event to Handle Counters
    element.addEventListener("click", () => {
      // Decrease Total Counter
      arr.pop();
      total.textContent = arr.length;

      // Increase Done Counter
      count++;
      document.querySelector("#done").textContent = count;
    });
  }
});
