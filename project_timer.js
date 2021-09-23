var countDownDate = new Date("dec 25, 2021 00:00:00").getTime();

var element1=document.getElementById("div1");
var element2=document.getElementById("div2");
var element3=document.getElementById("div3");
var element4=document.getElementById("div4");


var data=setInterval(()=>{
var today_time=new Date().getTime();
var diff=countDownDate-today_time;
var day=Math.floor(diff/(1000*60*60*24));
var hr=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
var min=Math.floor((diff%(1000*60*60))/(1000*60));
var se=Math.floor((diff%(1000*60))/(1000));

  if(day==0 && hr==0 && min==0 && se==0){
      clearInterval(data);
      document.getElementById("parent_div").style.display="none";
      document.body.style.backgroundImage = "url('xmas3.jpg')";
  }
  element1.innerHTML=day.toString().padStart(2,"0");
  element2.innerHTML=hr.toString().padStart(2,"0");
  element3.innerHTML=min.toString().padStart(2,"0");
  element4.innerHTML=se.toString().padStart(2,"0");
},1000);