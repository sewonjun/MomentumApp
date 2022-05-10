const dDayInput = document.querySelector("#dDay");
const dDaySubmit = document.querySelector("#dDayBtn")
const dDayForm = document.querySelector("#dDayForm")
function getDay(event){
    event.preventDefault();
    const realDay = String(dDayInput.value) ;
    localStorage.setItem("Dday", realDay); 
    // const goalDay = new Date(Dday)
    console.log(realDay);
}
const savedDay = localStorage.getItem("Dday");

function calculateDday(){
    const today = new Date();
    const Dday = new Date(savedDay)
    console.log(Dday);
}
calculateDday();
dDayForm.addEventListener("submit", getDay);


