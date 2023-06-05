let input=document.getElementById("input");
let tasks=document.getElementById("tasks");
let submit=document.getElementById("submit");
let time=document.getElementById("time")



function search(e){
    e.preventDefault();
    let inputVal=input.value
    create(inputVal)
}

function create(inputVal){
    div=document.createElement("div")
    div.setAttribute("class","task")
    
    const innerDiv=document.createElement("div");
    innerDiv.textContent=inputVal;

    const button=document.createElement("button")
    button.innerHTML="-"
    button.setAttribute("class","button")
    div.appendChild(innerDiv);
    div.appendChild(button);
    tasks.appendChild(div)

    button.addEventListener("click",()=>{
        const parent=button.parentNode;
        tasks.removeChild(parent)
})
}

submit.addEventListener("click",search)

function getDate(){

    let date=new Date;
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let secs=date.getSeconds();
    let ampm=hours>12?"PM":"AM"
    hours=(hours%12)||12
    hours=AddingZeros(hours)
    minutes=AddingZeros(minutes)
    secs=AddingZeros(secs)
    let result=`${hours}:${minutes}:${secs}${ampm}`
    time.innerHTML=result
}
function AddingZeros(time){
    time=time.toString();
    return time.length<2?"0"+time:time
}
setInterval(getDate,1000)



