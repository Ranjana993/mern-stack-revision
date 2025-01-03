const inputValue = document.getElementById("value");
const btn = document.getElementById("addTodo");
const dataWrapper = document.querySelector(".data_wrapper");

// Initialize todo array from localStorage
let todoArr = JSON.parse(localStorage.getItem("allTodos")) || [];

// Function to render todos
const getTodos = () => {
  dataWrapper.innerHTML = "";
  todoArr.forEach((todo, index) => {
    let div = document.createElement("div");
    div.setAttribute("id", "data");
    div.innerHTML = `
      <p class="${todo.completed ? "completed" : ""}">${todo.text}</p>
      <input type="checkbox" ${todo.completed ? "checked" : ""}>
      <button>Remove</button>
    `;

    const removeBtn = div.querySelector("button");
    const checkbox = div.querySelector("input[type='checkbox']");

    // Remove button functionality
    removeBtn.addEventListener("click", () => {
      todoArr.splice(index, 1); 
      localStorage.setItem("allTodos", JSON.stringify(todoArr)); 
      getTodos(); 
    });

    // Mark as completed functionality
    checkbox.addEventListener("click", () => {
      todoArr[index].completed = checkbox.checked; 
      localStorage.setItem("allTodos", JSON.stringify(todoArr));
      div.querySelector("p").classList.toggle("completed", checkbox.checked); 
    });

    dataWrapper.appendChild(div);
  });
};

// Add todo functionality
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = inputValue.value.trim();
  if (value) {
    todoArr.push({ text: value, completed: false }); 
    localStorage.setItem("allTodos", JSON.stringify(todoArr)); 
    inputValue.value = ""; 
    getTodos(); 
  }
});

getTodos();
