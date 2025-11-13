let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");


addBtn.disabled = true;


input.addEventListener("input", () => {
  addBtn.disabled = input.value.trim() === "";
});


addBtn.addEventListener("click", () => {
  let commentText = input.value.trim();
  if (commentText === "") return;


  let li = document.createElement("li");
  li.textContent = commentText;


  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";


  delBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this comment?")) {
      taskList.removeChild(li);
      alert("Comment deleted successfully.");
    } else {
      alert("Deletion cancelled.");
    }
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);


  input.value = "";
  addBtn.disabled = true;


  let originalText = addBtn.textContent;
  addBtn.textContent = "Added!";
  setTimeout(() => {
    addBtn.textContent = originalText;
  }, 1000);
});

