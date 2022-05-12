const dDayInput = document.querySelector("#dDay");
const dDaySubmit = document.querySelector("#dDayBtn");
const dDayForm = document.querySelector("#dDayForm");
const dDayPaint = document.querySelector("#paintdDay");
const todayPaint = document.querySelector("#paintToday");
const HIDDEN = "hidden";

function paintLeftdays(){
    const savedDiffDay = localStorage.getItem("leftDays");
    const savedToday = localStorage.getItem("today");
    if(savedDiffDay === null || savedToday===null){
        alert("insert dayPicker");
    } else {
        dDayForm.classList.add(HIDDEN);
        dDayPaint.classList.remove(HIDDEN);
        todayPaint.classList.remove(HIDDEN);
        todayPaint.innerText = `Today is ${savedToday}`;
        dDayPaint.innerText = `D-DAY ${savedDiffDay}`;
    }
}

function getDay(event){
    event.preventDefault();
    const realDay = dDayInput.value;
    localStorage.setItem("Dday", realDay); 
    const goalDay = new Date(realDay)
    console.log(goalDay);
    // const savedDay = localStorage.getItem("Dday");
    const today = new Date();
    const simpleToday = new Date().toISOString().slice(0, 10);
    console.log(simpleToday)
    // console.log(today);
    localStorage.setItem("today", simpleToday);
    const diff = goalDay - today;
    console.log(diff);
    const getDiffDay = Math.ceil(diff/(1000*60*60*24));
    console.log(getDiffDay);
    localStorage.setItem("leftDays", getDiffDay);
}

dDayForm.addEventListener("submit", getDay);
paintLeftdays();


