let time = document.getElementById("time");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resettBtn = document.getElementById("reset");
let lapBtn = document.getElementById("lap");
let secText = document.getElementById("sec");
let minText = document.getElementById("min");
let hrText = document.getElementById("hr");
let timelist = document.getElementById("timelist");
// Create the list item element
let lap;

let started = false;
let sec = 0;
let min = 0;
let hr = 0;
let timer;


function update(){
if(sec>59)
{
   min++
   sec = 0;
}
if(min>59)
{
    hr++
    min = 0;
}

secText.innerText = sec.toString(10).padStart(2, '0');
minText.innerText = min.toString(10).padStart(2, '0');
hrText.innerText = hr.toString(10).padStart(2, '0');

}







startBtn.addEventListener('click', ()=>{
    if(!started)
    {
        started = true;
        timer = setInterval(()=>{
            sec++;
            update()
        }, 1000);    
    }
   
});

stopBtn.addEventListener('click',()=>{
    if(started)
    {
        clearInterval(timer);
        started = false;
    }
});

resettBtn.addEventListener('click', ()=>{
    sec = 0;
    min = 0;
    hr = 0;
    //Loop through all of its list items
while (timelist.firstChild) {
    //Remove each list item
    timelist.removeChild(timelist.firstChild);
  }
    update();
})

lapBtn.addEventListener('click', ()=>{
    createLap(hr, min , sec)
});


function createLap(hr, min , sec){

    lap = document.createElement("li");

    lap.innerHTML = `${hr.toString(10).padStart(2, '0')} : ${min.toString(10).padStart(2, '0')} : ${sec.toString(10).padStart(2, '0')}`

    timelist.appendChild(lap);

}

console.log("script loaded");