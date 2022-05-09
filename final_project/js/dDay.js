const dDayInput = document.querySelector("#dDay");
const dDaySubmit = document.querySelector("#dDayBtn")
const dDayForm = document.querySelector("#section2")
//일단 input을 이용해서 dayp picker를 만들어 .. 그리고 그 다음에 그 value를 어떻게 넣는지 알아봐 
function getDay(event){
    event.preventDefault();
    const realDay = dDayInput.value ;
    localStorage.setItem("Dday", realDay); 
    // const goalDay = new Date(Dday)
    console.log(realDay);
}

dDayForm.addEventListener("submit", getDay);


