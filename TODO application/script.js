let dateTime=document.getElementById("calender-time");
let ul=document.getElementById("todo-list");
let form=document.querySelector("form");
let clearBtn=document.getElementById("clear")
let dates =new Date().toLocaleDateString("en-us", { weekday: "long", year: "numeric", month:"short", day: "numeric" });
let id=1;
dateTime.textContent=dates;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let {Input}=form.elements;
    // let obj={
    //     input_ele:Input.value,
    //     submitbtn:SubmintButton.value,
    //     clearBtn:clear.value
    // }
    addToDOM (Input.value);
})
clearBtn.addEventListener("click",()=>{
    ul.innerHTML=``
})



let addToDOM=(value)=>{
    

   ul.innerHTML+=`<li class="list-group-item p-3">
                    <input class="form-check-input me-1"  type="checkbox">
                    <label class="form-check-label" id="todo-${id}"  for="todo-${id}">
                    ${value}
                </label>
                </li>`
    id+=1;
    return value;
}
