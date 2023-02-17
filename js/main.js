
let input=document.querySelector(".task input");
let add=document.querySelector(".task .add");
let taskinfo=document.querySelector(".tasks-info");
 window.onload = function(){
input.focus();
 }
 add.onclick = function(){
    if (input.value===''){
        console.log("No Value");
    }
    else{
       let notasks=document.querySelector(".no-tasks") ;
       if (document.body.contains(document.querySelector(".no-tasks"))) {
notasks.remove();
       }
let span=document.createElement("span");
let truee = document.createElement("input");
truee.setAttribute("type","checkbox");
truee.className='checkbox';
let spantext=document.createTextNode(input.value);
let deletee=document.createElement("span");
let deletetext=document.createTextNode("Delete");
span.appendChild(spantext);
span.className='value';
deletee.appendChild(deletetext);
deletee.className='delete';
span.appendChild(deletee);
span.appendChild(truee)
taskinfo.appendChild(span); 
input.value='';
input.focus();
truee.onclick=function(){
  truee.classList.toggle("finished");
}
    }
}
    document.addEventListener('click',function(e){
if(e.target.className=='delete'){
e.target.parentNode.remove();
if(taskinfo.childElementCount== 0){
    notasks();
}
}

    });
    
    if(taskinfo.childElementCount > 1){
      let deleteall=document.createElement("input");
      deleteall.setAttribute("type","button");
      let deltext=document.createTextNode("clear");
      deleteall.appendChild(deltext);
      taskinfo.appendChild(deleteall);
      deleteall.onclick=function(){
    taskinfo.remove();
      }
    }
    function notasks(){
        let spanmsg=document.createElement("span");
        let textmsg=document.createTextNode("no tasks to show");
        spanmsg.appendChild(textmsg);
        spanmsg.className='no-tasks-msg';
       taskinfo.appendChild(spanmsg);
    }