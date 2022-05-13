const dDayInput = document.querySelector("#dDay");
const dDaySubmit = document.querySelector("#dDayBtn");
const dDayForm = document.querySelector("#dDayForm");
const dDayPaint = document.querySelector("#paintdDay");
const todayPaint = document.querySelector("#paintToday");
const HIDDEN = "hidden";

function paintLeftDays(){
    const savedDiffDay = localStorage.getItem("leftDays");
    const savedToday = localStorage.getItem("today");
    todayPaint.innerText = `Today is ${savedToday}`;
    dDayPaint.innerText = `D-DAY ${savedDiffDay}`;
}

function nullCheck(){
    const savedDiffDay = localStorage.getItem("leftDays");
    const savedToday = localStorage.getItem("today");
    if(savedDiffDay === null || savedToday===null){
        alert("insert dayPicker");
    } else {
        dDayForm.classList.add(HIDDEN);
        dDayPaint.classList.remove(HIDDEN);
        todayPaint.classList.remove(HIDDEN);
        paintLeftDays();
        // todayPaint.innerText = `Today is ${savedToday}`;
        // dDayPaint.innerText = `D-DAY ${savedDiffDay}`;
    }
}

function getDay(event){
    event.preventDefault();
    const realDay = dDayInput.value;
    localStorage.setItem("Dday", realDay); 
    const goalDay = new Date(realDay)
    console.log(goalDay);
    const today = new Date();
    const simpleToday = new Date().toISOString().slice(0, 10);
    console.log(simpleToday)
    localStorage.setItem("today", simpleToday);
    const diff = goalDay - today;
    console.log(diff);
    const getDiffDay = Math.ceil(diff/(1000*60*60*24));
    console.log(getDiffDay);
    localStorage.setItem("leftDays", getDiffDay);
    // const savedDiffDay = localStorage.getItem("leftDays");
    // const savedToday = localStorage.getItem("today");
    // todayPaint.innerText = `Today is ${savedToday}`;
    // dDayPaint.innerText = `D-DAY ${savedDiffDay}`;
    paintLeftDays();
}
nullCheck();
dDayForm.addEventListener("submit", getDay);


