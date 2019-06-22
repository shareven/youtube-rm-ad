
window.setInterval(()=>{
  var btn=document.querySelector(".ytp-ad-skip-button");if(btn){btn.click()}
},1000);
 
var list=document.querySelectorAll("a");
list.forEach(e => {
   e.target="_blank";
});