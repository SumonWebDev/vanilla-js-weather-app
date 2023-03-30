const input=document.querySelector('#input');
const button=document.querySelector('#search-button');
const city=document.querySelector('#city');
const temperature=document.querySelector('#temperature');
const lead=document.querySelector('.lead');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=84883e11040da6574183ab755f41fb1f')
.then(res=>res.json())
.then(data=>{
    const cityName=data.name;
    document.querySelector('#city').innerText=cityName;
    document.querySelector('#input').value='';
    const temp=data.main.temp;
    const newTemp=temp- 273.15;
    document.querySelector('#temperature').innerText=newTemp;
    const lead=data.weather[0].main;
    document.querySelector('.lead').innerText=lead;
})
})
