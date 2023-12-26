//selectors
const addbtn = document.querySelector(".add-btn");
const input = document.querySelector(".inp");
const todoul = document.querySelector(".todo-ul");

//event listeners
addbtn.addEventListener("click", addTask);
todoul.addEventListener("click", checkordel);

//functions 
function addTask(e) {
    e.preventDefault();

    //create li
    const todoli = document.createElement("li");
    todoli.classList.add("todo-list");

    //create div
    const tododiv = document.createElement("div");
    todoli.classList.add("todo-item");

    //add input value to div
    tododiv.innerText = input.value;

    //create complete button
    const checkbtn = document.createElement("button");
    checkbtn.classList.add("check-btn");
    checkbtn.innerHTML = '<i class="fa-solid fa-check"></i>';

    //create delete button
    const delbtn = document.createElement("button");
    delbtn.classList.add("x-btn");
    delbtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    //add div + complete button + delete button --> li
    todoli.appendChild(tododiv);
    todoli.appendChild(checkbtn);
    todoli.appendChild(delbtn);

    //add list to ul
    todoul.appendChild(todoli);

    //remove input value
    input.value = "";
}

function checkordel(e) {
    const item = e.target;
    if (item.classList[0] === 'check-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
    if (item.classList[0] === 'x-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("fall");
        todo.addEventListener("transitionend", () => {
            todo.remove();
        });
    }
}


