let btn=document.querySelector("button");
let alllest=[];
btn.onclick=function(e){
   
 let ele=document.querySelector("input");
 let val=ele.value;


 let list={
    name:val,
 }
 
 alllest.push(list);
 printList();
 myFunction();
}



function printList(){
    let li='';

    for(let i=0;i<alllest.length;i++){
        li+=`<li> <input type="checkbox" class ="myCheck"> 
        <span>${alllest[i].name}</span>

        </li>`;
        
    }
    document.querySelector(".to-do-list ul").innerHTML=li;
    addline();
}


function addline() {
    const ul = document.querySelector(".to-do-list ul"); // Select the parent ul for event delegation

    ul.addEventListener('change', function(e) {
        if (e.target && e.target.type === 'checkbox') {
            const taskItem = e.target.parentElement; // Assuming checkbox and span are direct children of li
            if (e.target.checked) {
                e.target.nextElementSibling.classList.add("line");
                taskItem.classList.add("success-checked");
            } else {
                e.target.nextElementSibling.classList.remove("line");
                taskItem.classList.remove("success-checked");
            }
        }
    });
}














