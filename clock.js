let clock = document.querySelector("#clock")
let cover = document.querySelector("#cover")
let time = document.querySelector("#time")
let dayfomart = document.querySelector("#dayformat")
let month = document.querySelector("#month")
let sevenSeg = document.querySelector("#hms")
let weekLi = document.querySelectorAll(".weekday")
let alarmInputs = document.querySelectorAll("#alarm input")
let alarmContainer = document.querySelector("#alarm-container")

setInterval(()=>{
    let d = new Date()
    let hour = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    let h;
    // format hours with am and pm
    (hour>12)? h = [(hour = +hour-12), "pm"] : h = [hour, "am"]
    sevenSeg.innerHTML = `${h[0]}:${min}:${sec}`
    dayfomart.innerHTML = h[1]
    weekLi[d.getDay()].style.color = "white"

},1000)

console.log(alarmInputs)
// const months = ['january']
// const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// weekdays[d.getDay()];

let closePopUp = (e) => {
    e.stopPropagation()
    cover.style.display = "none";
}
let openPopUp = () => {
    cover.style.display = "grid"
}

let alarmSet = [];

let setAlarm = () =>{
    let li = document.createElement("li")
    let hr = Number(alarmInputs[0].value)
    let min = Number(alarmInputs[1].value)
    let sec = Number(alarmInputs[2].value)
    if(isNaN(hr) || isNaN(min) || isNaN(sec)) alert("incorrect input, pls enter number")
    else {
        timeInMSec = (Math.abs(hr)*60*60 + Math.abs(min)*60 + Math.abs(sec)) * 1000;
        console.log(timeInMSec)
        let timeoutVar = setTimeout(function(){
            alert("alarm is done");
            li.style.color = "tomato";
        },timeInMSec);
        alarmSet.push(timeoutVar);
    }
    li.innerHTML =  `<span>${hr}:${min}:${sec}</span><button style="margin-left: auto;" onclick="deleteAlarm(this)">delete</button>`
    alarmContainer.appendChild(li)
}

let clearAlarm = ()=>{
    alarmInputs.forEach((x)=>{
        x.value = ''
    })
}

let deleteAlarm = (that) =>{
    let i = Array.prototype.indexOf.call(alarmContainer.childNodes, that.parentNode)
    console.log(i)
    clearTimeout(alarmSet[i])
    alarmSet.splice(i, 1)
    that.parentNode.remove()
}

