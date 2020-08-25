document.addEventListener("DOMContentLoaded", () => {
  
  // your code here

  const taskForm = document.getElementById('create-task-form');

  let userInput = taskForm.addEventListener('submit', function(event) {
    event.preventDefault()
   console.log(event.target[0].value);

const deleteButton = document.getElementById('tasks');
deleteButton.addEventListener('click', function(event) {
  h1.remove();
  console.log("event is gone!")
}

)

const taskLi = document.createElement("li")
taskLi.classList.add("task")
taskLi.innerHTML = `<h1> ${event.target[0].value}  </h1> <button>x</button>`
 let taskList = document.querySelector("#tasks")
tasks.append(taskLi)

  });

});