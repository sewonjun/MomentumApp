const dDayInput = document.querySelector("#dDay");
const dDaySubmit = document.querySelector("#dDayBtn");
const dDayForm = document.querySelector("#dDayForm");
const dDayPaint = document.querySelector("#paintdDay");

function paintLeftdays(){
    dDayPaint.innerText= `untill Dday ${savedDiffDay}`;
}

function getDay(event){
    event.preventDefault();
    const realDay = dDayInput.value;
    localStorage.setItem("Dday", realDay); 
    const goalDay = new Date(realDay)
    console.log(goalDay);
    // const savedDay = localStorage.getItem("Dday");
    const today = new Date();
    console.log(today);
    const diff = goalDay - today;
    console.log(diff);
    const getDiffDay = Math.ceil(diff/(1000*60*60*24));
    console.log(getDiffDay);
    localStorage.setItem("leftDays", getDiffDay);
    paintLeftdays();
}


const savedDiffDay = localStorage.getItem("leftDays");
console.log(savedDiffDay);

// getDay();
// console.log(savedDay);
// console.log(calculateDday());
dDayForm.addEventListener("submit", getDay);


