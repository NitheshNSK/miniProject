init=()=>{
    let dateTime=document.getElementById("calender-time");
    let dates =new Date().toLocaleDateString("en-us", { weekday: "long", year: "numeric", month:"short", day: "numeric" });
    dateTime.textContent=dates;
}
let index=1;
addToDom=(text)=>{
    let todo_list= document.getElementById("todo-list");
    todo_list.innerHTML+=`<li class="list-group-item p-3 " >
                            <input class="form-check-input me-1" id="todo-${index}"  type="checkbox">
                             <label class="form-check-label" id="id-${index}" for="todo-${index}">
                                ${text}
                            </label>
                        </li>`
    index+=1;
                    }
updateDom=(data)=>{
    let holder=data.innerText;
    data.innerHTML=holder.strike();
    data.setAttribute("style","pointer-events:none");

}
