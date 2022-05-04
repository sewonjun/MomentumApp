const dDay = document.querySelector("dDay");
//일단 input을 이용해서 dayp picker를 만들어 .. 그리고 그 다음에 그 value를 어떻게 넣는지 알아봐 
function getDay(){
    const Dday = document.querySelector(".dDay").value ;
    const goalDay = new Date(Dday)
    console.log( goalDay);
}

