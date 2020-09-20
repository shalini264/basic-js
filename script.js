var counter=document.getElementsByClassName("counter");
var positiveCases=document.getElementsByClassName("positive");
 let count=1;
setInterval(()=>{
    if(count<=1000)
    {count++;
    counter[0].innerText=count;}
    },1);
setTimeout(()=>{
    if(counter[0].innerText>2000)
    {
    positiveCases[0].innerText="Rapidly increasing";}
    else
    {positiveCases[0].innerText="Under Control";}
},8000);
