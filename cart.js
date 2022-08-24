

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



let rrr =  document.getElementById("imgbag");
rrr.addEventListener("click",function(){
    window.location = "./cart.html"
})










var data = JSON.parse(localStorage.getItem("cartitems")) 

console.log(data)
data.forEach(function(elem,index){
    let datadiv = document.createElement("div")
    datadiv.setAttribute("class","datadiv")

    let imageandetail = document.createElement("div");
    imageandetail.setAttribute("class","imageandetail")

    let image = document.createElement("div");
    image.setAttribute("class","image")
    let img = document.createElement("img");
    img.setAttribute("src", elem.img);
    img.setAttribute("class", "imgcon");
    image.append(img)
    let detail = document.createElement("div");
    detail.setAttribute("class","detail")
    let name = document.createElement("p")
    name.innerHTML=elem.name
    let model = document.createElement("p")
    model.innerHTML=elem.productId
    let color = document.createElement("p")
    color.innerHTML="color : blue"
    let size = document.createElement("p")
    size.innerHTML="size : 38"
    let edit = document.createElement("a")
    edit.innerHTML="Edit"


    detail.append(name,model,color,size,edit)
    imageandetail.append(image,detail,)

    let itemprice = document.createElement("div")
    itemprice.setAttribute("class","item")

    let price = document.createElement("p")
    price.innerHTML="$"+elem.price
    
    itemprice.append(price)
    let quantity = document.createElement("div")
    quantity.setAttribute("class","quantity")
   
    var quantitynum = document.createElement("p")
    quantitynum.innerHTML=elem.quantity

    var button1 = document.createElement("button");
    button1.innerHTML = "+ 1";
    button1.addEventListener("click",function(){
      myfun(elem);
    })
    var button2 = document.createElement("button");
    button2.innerHTML = "- 1";
    button2.addEventListener("click",function(){
      myfun2(elem);
    })

    var button3 = document.createElement("button");
    button3.innerHTML = "Delete";
    button3.addEventListener("click",function(){
      del(elem,index);
    })
    
    
    quantity.append(button2,quantitynum ,button1 , button3)
    

    let total = document.createElement("div")
    total.setAttribute("class","total")
    
    let finaldata  = JSON.parse(localStorage.getItem("cartitems"))
   var sum = Number(elem.quantity*elem.price);
   console.log(sum)
   
    
   var totalsum = document.createElement("p")
   totalsum.innerHTML="$"+sum
   total.append(totalsum);
    
   
    datadiv.append(imageandetail,itemprice,quantity,total)

    document.querySelector("#cartdetail").append(datadiv)
})



let finaldata2 = JSON.parse(localStorage.getItem("cartitems"))
var tsum=0;
   var total_sum = finaldata2.forEach(function(elem){
    return tsum += Number(elem.quantity*elem.price)
})

document.querySelector("#promobt").addEventListener("click",function(){
  let value = document.querySelector("#promo").value;
  var dis = Math.floor((tsum/100)*30)
 
  if("masai30"==value){
     alert("promo added")
     let x = tsum-dis
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
function myfun(elem){
    //console.log(cartdata)
    var count = 1
    elem.quantity =  elem.quantity+1
    localStorage.setItem("cartitems",JSON.stringify(data))
    window.location.reload();
  }
  function myfun2(elem){
    //console.log(cartdata)
    if(1<elem.quantity){
        
    elem.quantity =  elem.quantity-1
    localStorage.setItem("cartitems",JSON.stringify(data))
    window.location.reload();
    }
    
  }

  function del(elem,index){
    data.splice(index,1)
    localStorage.setItem("cartitems",JSON.stringify(data));
    window.location.reload();
}


let procedbtn = document.getElementById("procedbtn");
procedbtn.addEventListener("click",function(){
  window.location = "./form.html"
})


