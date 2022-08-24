

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

















let finaldata2 = JSON.parse(localStorage.getItem("cartitems"))
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
  location.replace("./paymentcompletionpage.html")
})



let formdata = JSON.parse(localStorage.getItem("formdata"));
/* <p id="firstname"></p>
                <p id="country"></p>
                <p id="pincode"></p>
                <p id="street"> </p> */

                document.getElementById("firstname").textContent = formdata["fname"]+ " " +formdata["lname"] + ","
                document.getElementById("country").textContent =  formdata["country"]+ " " +formdata["city"] + " " +formdata["postcode"]   + ","
                document.getElementById("pincode").textContent = "Street" +" "+ formdata["street"]+ ","
                document.getElementById("daytimePhone").textContent = "Province" +" "+ formdata["province"]+ ",";
                document.getElementById("daytimePhone2").textContent = "DaytimePhone" +" "+ formdata["daytimePhone"]+ ",";
                

document.querySelector("form").addEventListener("submit",function(){
  event.preventDefault()
  alert("O T P : 1 2 3 4")
})
