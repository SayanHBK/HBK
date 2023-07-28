const 
// allzone=document.getElementById('allzone')
currentTime=document.getElementById('currentTime')

currentTime.innerText= new Date().toLocaleString('en-us',{timeStyle:'full'})
fetch('/worldclock.json')
.then(res=>res.json())
.then(data=>{
    data.map(e=>{
    console.log(e.timezone);
})
})
.catch(err=> console.log(err))