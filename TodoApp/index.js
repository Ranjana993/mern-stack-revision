const todoValue = document.getElementById("value")
const addBtn = document.getElementById("btn")
const todoWrapper = document.querySelector(".all_todos")
const todoArr = JSON.parse(localStorage.getItem("todoItems")) || [];
console.log("todoArr", todoArr);


const getTodos = () => {
  todoWrapper.innerHTML = "";
  todoArr && todoArr.forEach((item, id) => {
    const div = document.createElement("div");
    div.setAttribute("class", "singleTodo");
    div.innerHTML = `
    <p  class="${item.status ? "complete" : ""}">${item.title}</p>
    <input type="checkbox" ${item.status ? "checked" : ""}>
    <button class="removeBtn">Remove</button>
  `
    const removeBtn = div.querySelector("button");
    const checkbox = div.querySelector("input[type='checkbox']");


    removeBtn.addEventListener("click", () => {
      todoArr.splice(id, 1);
      localStorage.setItem("todoItems", JSON.stringify(todoArr))
      getTodos()
    })

    checkbox.addEventListener("click", () => {
      todoArr[id].status = checkbox.checked;
      localStorage.setItem("todoItems", JSON.stringify(todoArr))
      div.querySelector("p").classList.toggle("complete", checkbox.checked)
    })

    todoWrapper.appendChild(div)
  })

  todoValue.value = ""
}


btn.addEventListener("click", (e) => {
  e.preventDefault()
  const value = todoValue.value;
  todoArr.push({ title: value, status: false });
  localStorage.setItem("todoItems", JSON.stringify(todoArr));
  getTodos()
})
getTodos()