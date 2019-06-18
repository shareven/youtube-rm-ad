//google open search result in new tab
var list=document.querySelectorAll("a");
list.forEach(e => {
   e.target="_blank";
});