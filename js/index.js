// initilising taskManager
const taskManager = new TaskManager();
//Task 9 step2.8 load the tasks with taskManager.load() and render them with taskManager.render()
taskManager.load();
taskManager.render();
// step 1: Implement JavaScript function to validate your form fields
const taskForm = document.getElementById("newTaskForm");


let taskName = document.querySelector("#taskName");
let taskOwner = document.querySelector("#taskOwner");
let taskDescription = document.querySelector("#taskDescription");
let dueDate = document.querySelector("#dueDate");
let status = document.querySelector("#status");

taskForm.addEventListener("submit", validateTask);
// in the event listener for the submit event on the New Task form, find the call to the TaskManager's addTask.

// Form validation for Task Name Field min length 5
function validateTask() {
  let error = 0;
  console.log("Task:  " + taskName.value);
  console.log("Task Assigned To :" + taskOwner.value);
  console.log("Task Description :" + taskDescription.value);
  console.log("Task Due Date :" + dueDate.value);
  console.log("Task Status:" + status.value);
  //step 2: Validation logic
  // Form validation for Task Description Field min length 5
  event.preventDefault();
  // Form validation for Task Name Field for min length 2
  if (taskName.value.trim().length > 5) {
    taskName.classList.add("is-valid");
    taskName.classList.remove("is-invalid");
    console.log("task name is valid");
  } else {
    error = 1;
    taskName.classList.add("is-invalid");
    taskName.classList.remove("is-valid");
    console.log("task name is invalid");
  }
  // Form validation for Task Description Field for min length 5
  if (taskDescription.value.trim().length > 5) {
    taskDescription.classList.add("is-valid");
    taskDescription.classList.remove("is-invalid");
    console.log("task description is valid");
  } else {
    error = 1;
    taskDescription.classList.add("is-invalid");
    taskDescription.classList.remove("is-valid");
    console.log("task description is invalid");
  }
  // Form validation for Task Assigned Field for min length 5
  if (taskOwner.value.trim().length > 5) {
    taskOwner.classList.add("is-valid");
    taskOwner.classList.remove("is-invalid");
    console.log("task owner is valid");
  } else {
    error = 1;
    taskOwner.classList.add("is-invalid");
    taskOwner.classList.remove("is-valid");
    console.log("task owner is invalid");
  }
  // Form validation for Task dueDate Field for not empty
  if (dueDate.value.length > 0) {
    dueDate.classList.add("is-valid");
    dueDate.classList.remove("is-invalid");
    console.log("dueDate is valid");
  } else {
    error = 1;
    dueDate.classList.add("is-invalid");
    dueDate.classList.remove("is-valid");
    console.log("dueDate is invalid");
  }
  // Form validation for Task Status Field for not empty
  if (status.value.length > 0) {
    status.classList.add("is-valid");
    status.classList.remove("is-invalid");
    console.log("status is valid");
  } else {
    error = 1;
    status.classList.add("is-invalid");
    status.classList.remove("is-valid");
    console.log("status is invalid");
  }
  //call the taskManager's addTask method passing in your form's input.
  // If validation fails then function will not proceed further and
  // will return. The value of validationFail will also needed to be
  // reset to 0.

  if (error === 0) {
    taskManager.addTask(
      taskName.value,
      taskDescription.value,
      taskOwner.value,
      dueDate.value,
      status.value
    );
    taskForm.reset();
    const taskList = document.querySelector("#task-list");
    taskManager.save();
    taskList.innerHTML = taskManager.render();
  }
}
taskManager.addTask(
  "Complete your sprint2",
  "work hard and achieve your goals",
  "Shumailakashif",
  new Date("2021-10-26"),
  "In Progress"
);
taskManager.addTask(
  "Practice code academy",
  "work hard and achieve your goals",
  "Shumailakashif",
  new Date("2021-09-26"),
  "Done"
);
taskManager.addTask(
  "Complete your sprint2",
  "work hard and achieve your goals",
  "Shumailakashif",
  new Date("2021-10-26"),
  "IN progress"
);
// taskManager.addTask(
//   "Practice code academy",
//   "work hard and achieve your goals",
//   "Shumailakashif",
//   new Date("2021-09-26"),
//   "Review"
// );
// taskManager.addTask(
//   "Complete your sprint2",
//   "work hard and achieve your goals",
//   "Shumailakashif",
//   new Date("2021-10-26"),
//   "In Progress"
// );
// taskManager.addTask(
//   "Practice code academy",
//   "work hard and achieve your goals",
//   "Shumailakashif",
//   new Date("2021-09-26"),
//   "Done"
// );
const taskList = document.querySelector("#task-list");
taskList.innerHTML = taskManager.render();

// const taskHtml = createTaskHtml('jensen', 'sweeping', 'jensen', 22/09/2022, 'review');
// console.log(taskHtml);
// In js/index.js, at the bottom of the file, use querySelector to select the Task List and store it in a variable
//adding an Event Listner
taskList.addEventListener("click", function (event) {
  // console.log(event);
  if (event.target.classList.contains("btn-done")) {
    const li = event.target.closest("li");
    console.log(li);
    const taskId = Number(li.getAttribute("data-task-id"));
    // console.log(taskId);
    const task = taskManager.getTaskById(taskId);
    task.status = "Done";
    console.log(task.status);
    taskList.innerHTML = taskManager.render();
    //after both adding a new task and updating a task's status to done, call taskManager.save() to save the tasks to localSorage
    taskManager.save()
  }
  //create a taskId variable, setting the value to the taskId data-attribute

});
