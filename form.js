

import {slider} from "./sliderdata.js"


let slideshow_container = document.querySelector(".slideshow-container");
slideshow_container.innerHTML = slider()



let slideIndex = 1;
showSlides(slideIndex);

let plusone = document.querySelector(".prev");
plusone.addEventListener("click",function(){
    
    showSlides(slideIndex += (-1));
})


let minone = document.querySelector(".next");
minone.addEventListener("click",function(){
    
    showSlides(slideIndex += 1);
})







function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  

}



import { navobar } from "./navobar.js";


document.querySelector(".Navsecond").innerHTML = navobar()

import { menu } from "./menu.js";
document.querySelector("#myHeader").innerHTML = menu()




import { footer , read } from "./footer.js";

document.querySelector(".foter").innerHTML = footer();
document.querySelector(".read").innerHTML = read();

document.querySelector("#myread").addEventListener("click",function(){
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myread");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Hide"; 
    moreText.style.display = "inline";
  }
})
















 
let finaldata2 = JSON.parse(localStorage.getItem("cartitems")) || []
var tsum=0; 
   var total_sum = finaldata2.forEach(function(elem){
    return tsum += Number(elem.quantity*elem.price)
})

document.querySelector("#promobt").addEventListener("click",function(){
  value = document.querySelector("#promo").value;
  var dis = Math.floor((tsum/100)*30)
 
  if("masai30"==value){
     alert("promo added")
     x = tsum-dis
     var sumsum = document.querySelector("#Subtotal")
     sumsum.innerHTML="$"+x
     var totalcost = document.querySelector(".totalcost")
     totalcost.innerHTML="$"+x
     localStorage.setItem("totalsummm",x)
  }
  else{
      alert("Wrong Promo")
      x = sum
      var sumsum = document.querySelector("#Subtotal")
      sumsum.innerHTML="$"+x
      var totalcost = document.querySelector(".totalcost")
      totalcost.innerHTML="$"+x
      localStorage.setItem("totalsummm",x)
  }
})

console.log(tsum)
  var sumsum = document.querySelector("#Subtotal")
  sumsum.innerHTML="$"+tsum
  var totalcost = document.querySelector(".totalcost")
  totalcost.innerHTML="$"+tsum
  localStorage.setItem("totalsummm",tsum)

let Proceed = document.querySelector(".Proceed");
Proceed.addEventListener("click",function(){
  if(document.getElementById("country").value!==""&&
  document.getElementById("fname").value!==""&&
  document.getElementById("lname").value!==""&&
  document.getElementById("street").value!==""&&
  document.getElementById("adress").value!==""&&
   document.getElementById("city").value!==""&&
  document.getElementById("province").value!==""&&
  document.getElementById("postcode").value!==""&&
 document.getElementById("daytimePhone").value!==""){
  let object = {
    country : document.getElementById("country").value,
    fname : document.getElementById("fname").value,
    lname : document.getElementById("lname").value,
    street : document.getElementById("street").value,
    adress : document.getElementById("adress").value,
    city : document.getElementById("city").value,
    province : document.getElementById("province").value,
    postcode : document.getElementById("postcode").value,
    daytimePhone : document.getElementById("daytimePhone").value,
  };
  localStorage.setItem("formdata",JSON.stringify(object))
  window.location = "./payment.html"
 }
 else{
  alert("Enter Chy")
 }
  


})









