let elem=document.querySelectorAll(".elem");

elem.forEach(function(el){

   el.addEventListener("mouseenter",function(){
       el.childNodes[3].style.opacity=1;
   })
   el.addEventListener("mouseleave",function(){
    el.childNodes[3].style.opacity=0;
   })
   el.addEventListener("mousemove",function(dets){
    el.childNodes[3].style.left=dets.x+"px";
   })
});