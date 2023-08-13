const adviceId = document.getElementById("advice");
const adviceTxt = document.getElementById("text");
const adviceBtn = document.getElementById("btn");
const url = "https://api.adviceslip.com/advice";


async function getAdvice() {
    const res = await fetch(url);
    const {slip: {id, advice}} = await res.json();
    adviceId.innerText = id;
    adviceTxt.innerText = advice;

}
getAdvice()

adviceBtn.addEventListener('click', getAdvice)
   