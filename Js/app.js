let inputEl = document.querySelector("#inp");
let form = document.querySelector("#form");
let taskEl = document.querySelector("#task-container");
let ul = document.querySelector("#ul")
let $changeBtn = document.querySelector("#switch")

form.addEventListener("submit", e => {
    e.preventDefault();
    if(inputEl.value.trim().length > 0){
    let newEl = document.createElement('li');
    let newTaskEl = document.createElement('span');
    let btnWrapper = document.createElement('div');
    newTaskEl.innerText = inputEl.value;
    btnWrapper.className = "btn__wrapper"
    newEl.className = "task-item"
    btnWrapper.innerHTML = `
    <button class="complete"><i class="fas fa-circle-check"></i></button>
    <button class="edit"> <i class="fas fa-edit"></i></button>
    <button class="delete"> <i class="fas fa-trash"></i> <br></button>
    `


    newEl.appendChild(newTaskEl);
    newEl.appendChild(ul);
    newEl.appendChild(btnWrapper);
    taskEl.appendChild(newEl);
    inputEl.value = "";
    }
})

taskEl.addEventListener("click", (e) => {
    if(e.target.className == "complete" ){
      let isAgreedToComplete = confirm('Are you complete this task?')
      if(isAgreedToComplete){
      e.target.parentElement.parentElement.style.textDecoration = "line-through"
      }
    }
    else if(e.target.className == "delete"){
      const isAgreedToDelete = confirm('Are you sure to delete this item?')
        if(isAgreedToDelete){
         setTimeout(() => {
            e.target.parentElement.parentElement.remove();
          }, 300)
        }
    }
    else if(e.target.className == "edit"){
      console.log(e.target.Children);
      if(e.target.parentElement.parentElement.hasAttribute("contenteditable")){
        e.target.parentElement.parentElement.removeAttribute("contenteditable");
        e.target.innerHTML = '<i class="fas fa-edit"></i>';
        e.target.style.background = "gold"
      }
      else{
        e.target.parentElement.parentElement.setAttribute("contenteditable", true);
        e.target.innerHTML = '<i class="fas fa-check-double"></i>';
        e.target.style.background = "purple"
      }
    }
  })
  $changeBtn.addEventListener("click", () => {
    if(localStorage.getItem("theme") != "dark"){
      localStorage.setItem("theme", "dark");
      document.body.style.background = "#222";
      document.body.style.color = "#fff";
      inputEl.style.background = "#222";
      inputEl.style.color = "#fff";
    }
    else{
      localStorage.setItem("theme", "light");
      document.body.style.background = "#fff";
      document.body.style.color = "#222";
      inputEl.style.background = "#fff";
      inputEl.style.color = "#222";
    }
  });
  
  (() => {
    if(localStorage.getItem("theme") == "dark"){
      document.body.style.background = "#222";
      document.body.style.color = "#fff"
      inputEl.style.background = "#222"
      inputEl.style.color = "#fff"
    }
    else{
      document.body.style.background = "#fff";
      document.body.style.color = "#222"
      inputEl.style.background = "#fff"
      inputEl.style.color = "#222"
    }
  })()
