const inp=document.querySelector("input");
const btn=document.querySelector("#add-btn");
const text=document.querySelector("#todo-item");

btn.addEventListener("click" , ()=>{
    const task=inp.value;

    if(task.trim()==="")return;

    text.innerHTML +=`<div class="task">
        <p>${task}</p>
        <div>
            <button class="edit-btn">Edit</button>
            <button class="clear-btn">Clear All</button>  
        </div>
    </div>`

    const edit=document.querySelectorAll(".edit-btn");
    edit.forEach((btn)=>{
        btn.addEventListener("click" , (e)=>{
            const taskText=e.target.parentElement.previousElementSibling;
            taskText.innerText=prompt("Edit your task" , taskText.innerText);
        })  
    })

    const clear=document.querySelectorAll(".clear-btn");
    clear.forEach((btn)=>{
        btn.addEventListener("click" , (e)=>{
            const task=e.target.parentElement.parentElement;
            task.remove();
        })
    })

    inp.value="";
})
    
