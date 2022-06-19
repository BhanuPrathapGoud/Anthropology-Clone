
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


let rrr =  document.getElementById("imgbag");
rrr.addEventListener("click",function(){
    window.location = "./cart.html"
})


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






var arr=JSON.parse(localStorage.getItem("clickeditem"))


let append=(data)=>{
    let firstcard=document.getElementById("firstcard")

    let pic1=document.createElement("div")
    let img1=document.createElement("img")
    img1.setAttribute("class","img1")
   img1.src=	data.img
   let img2=document.createElement("img")
   img2.setAttribute("class","img2")
   img2.src=data.img
   let img3=document.createElement("img")
   img3.src=data.img
   img3.setAttribute("class","img1")
   let img4=document.createElement("img")
img4.src=data.img
   let img5=document.createElement("img")
   img5.src=data.img
   img5.setAttribute("class","img1")
  
  
  
  
   pic1.append(img1,img2,img3,img4,img5)
    firstcard.append(pic1)
}
append(arr)
    let appending= (data)=>{
        let secondcard=document.getElementById("secondcard")
     
        let img21=document.createElement("img")
        img21.src=data.img

    let p=document.getElementById("hover")
        secondcard.append(img21,p)
     
    }
    appending(arr)

    let appending2=(data)=>{
let thirdcard=document.getElementById("thirdcard")
let h1=document.createElement("h1")
h1.innerText=data.name
let p1=document.createElement("p")
p1.innerText=data.name
let star=document.getElementById("stars")
let price=document.createElement("p")
price.innerText="$ "+data.price
thirdcard.append(h1,p1,star,price)
    }
    appending2 (arr)
    let appending3=()=>{
    let thirdcard=document.getElementById("thirdcard")
let p2=document.createElement("p")
p2.innerText="Available on orders between $1.00 - $2,000.00 with"

let exclam=document.getElementById("exclam")
let color=document.createElement("color")
color.innerText="  Color:  BLACK"
let shades=document.getElementById("shadesofcolor")

// var btn1=document.createElement("button");
// btn1.setAttribute("id","btn1")
// var btn2=document.createElement("button");
// btn2.setAttribute("id","btn2")
// var btn3=document.createElement("button");
// btn3.setAttribute("id","btn3")
// var btn4=document.createElement("button");
// btn4.setAttribute("id","btn4")
// var divbtnn = document.createElement("div");
// divbtnn.setAttribute("id","divbtn");
// divbtnn.append(btn1,btn2,btn3,btn4)
// shades.append(divbtnn)



let range=document.getElementById("range")
let size=document.getElementById("size")
let box=document.getElementById("box")
let p3=document.getElementById("sizeguide")
let qty=document.getElementById("Qty")
let basket=document.getElementById("basket")


basket.addEventListener("click",function(){
    AddtoCart(arr)
})

function AddtoCart(ele){
    var cartitems= JSON.parse(localStorage.getItem("cartitems"))||[]
    var obj = cartitems.find(function(o) { 
        return o.productId == ele.productId;
    })
    if(obj != undefined) {
        obj.quantity ++;
        var cartitems = cartitems.filter(function(o) {
            return o.productId != ele.productId
        })
        cartitems.push(obj);
    } else {
        ele.quantity = 1;
        cartitems.push(ele);
    }
    localStorage.setItem("cartitems",JSON.stringify(cartitems));
    alert("Add cart items successfully");
}


thirdcard.append(p2,exclam,color,shades,range,size,box,p3,qty,basket)
let registry=document.getElementById("registry")
let pickup=document.getElementById("pickup")
let avail=document.getElementById("avail")
let details=document.getElementById("details")
let detail=document.createElement("p")
detail.innerText="Style No. 4112609690111; Color Code: 001"
let tshirt=document.createElement("h5")
tshirt.innerText="About T.La"
let description=document.createElement("p")
description.innerText="Dyed, cut and sewn in the Los Angeles fashion district, each T.La knit is inspired by the laidback aesthetic of LA, and designed just for Anthropologie. With comfy, weekend-ready versatility serving as the inspiration for each style, T.La adds of-the-moment flourishes and fits, ensuring that these basics are anything but."
thirdcard.append(registry,pickup,avail)
    

let fourthcard=document.getElementById("fourthcard")

    let fpic1=document.createElement("div")
    let fp1=document.createElement("p")
    fp1.innerText="You May Also Like"
    let fimg1=document.createElement("img")
   fimg1.src=	"https://images.urbndata.com/is/image/Anthropologie/4112609690213_025_b3?$an-category$&qlt=80&fit=constrain"
   let fimg2=document.createElement("img")
   fimg2.src="https://images.urbndata.com/is/image/Anthropologie/4112609690171_001_b2?$an-category$&qlt=80&fit=constrain"
   let fimg3=document.createElement("img")
   fimg3.src="https://images.urbndata.com/is/image/Anthropologie/4112609690217_010_b2?$an-category$&qlt=80&fit=constrain"
   let fimg4=document.createElement("img")
fimg4.src="https://images.urbndata.com/is/image/Anthropologie/65982829_066_b2?$an-category$&qlt=80&fit=constrain"
   let fimg5=document.createElement("img")
   fimg5.src="https://images.urbndata.com/is/image/Anthropologie/4112609690195_026_b2?$an-category$&qlt=80&fit=constrain"
  
  
  
  
   fpic1.append(fp1,fimg1,fimg2,fimg3,fimg4,fimg5)
    fourthcard.append(fpic1)

let container2firstcard=document.getElementById("container2firstcard")
let heading=document.getElementById("h1")
let imgdiv=document.getElementById("imgdiv")
let simg1=document.getElementById("simg1")
simg1.src="https://images.urbndata.com/is/image/Anthropologie/49875073_030_b?$an-category$&qlt=80&fit=constrain"
let simg2=document.getElementById("simg2")
simg2.src="https://images.urbndata.com/is/image/Anthropologie/50581040_014_b?$an-category$&qlt=80&fit=constrain"
let simg3=document.getElementById("simg3")
simg3.src="https://images.urbndata.com/is/image/Anthropologie/4115237430016_014_b?$an-category$&qlt=80&fit=constrain"
container2firstcard.append(heading,imgdiv)



let container2seccard=document.getElementById("container2seccard")
container2seccard.append(details,detail,tshirt,description)
let productcontent=document.getElementById("productcontent")
let dimension=document.getElementById("dimension")
let dimensions=document.getElementById("dimensions")
container2seccard.append(productcontent,dimension,dimensions)
let describe=document.getElementById("descriptive")
let ship=document.getElementById("h2")
container2seccard.append(describe,ship)

let thirdcontainer=document.getElementById("thirdcontainer")
let thirdcontcard=document.getElementsByClassName("secondpart")
thirdcontainer.append(thirdcontcard)
}
appending3(arr)


