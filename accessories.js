
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


let rrr =  document.getElementById("imgbag");
rrr.addEventListener("click",function(){
    window.location = "./cart.html"
})

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
var dataArr = [
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/69504470_000_b3?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698",
        name: "Scott Csoke for Anthropologie Tulip Tote",
        price: 120.00,
        productId: 37
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/69504488_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        name: "Scott Csoke for Anthropologie Cosmetic Bag",
        price: 68.00,
        productId: 38
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/69046092_266_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        name: "Striped Crochet Vest",
        price: 98.00,
        productId: 23
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/69641124_053_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        name: "Embellished Demi Hoop Earrings",
        price: 118.00,
        productId: 39
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/70041389_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        name: "Sparkly Tulle Opera Gloves",
        price: 28.00,
        productId: 40
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/65178998_065_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        name: "Stacked Birthstone Ring",
        price: 58.00,
        productId: 41
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/70361597_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        name: "Chimi 05 Pink Sunglasses",
        price: 140.00,
        productId: 42
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/69770279_070_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        name: "Vegan Mini Crossbody Bag",
        price: 88.00,
        productId: 43
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/68312164_011_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        name: "Crochet Fringe Poncho",
        price: 110.00,
        productId:44
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/76087782_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        name: "Picnic Hair Scarf",
        price: 24.00,
        productId: 45
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/78192739_070_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        name: "14k Gold-Plated Hammered Cuff Bracelet",
        price: 48.00,
        productId: 46
    },
    {
    img:"https://images.urbndata.com/is/image/Anthropologie/68999861_014_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    name:"Embellished Quilted Satchel",
    price: 98.00,
    productId:47
},
{
    img:"https://images.urbndata.com/is/image/Anthropologie/68949643_270_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    name:"Jute Boater",
    price:83.00,
    productId:48
},
{
    img:"https://images.urbndata.com/is/image/Anthropologie/67116491_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    name:"Bl-nk V-Neck Caftan",
    price: 140.00,
    productId:49
},
{
    img:"https://images.urbndata.com/is/image/Anthropologie/68006378_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    name:"Cropped Crochet Shrug",
    price:68.00,
    productId:50
},
{
    img:"https://images.urbndata.com/is/image/Anthropologie/65658387_014_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    name:"Woven Rattan Shoulder Bag",
    price:84.00,
    productId:51

},
{
    img:"https://images.urbndata.com/is/image/Anthropologie/68006048_014_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    name:"Long Crochet Tunic",
    price:91.00,
    productId:52
}
]
displayProduct(dataArr)




function displayProduct(dataArr){
    dataArr.forEach(function(ele){
    var divall=document.createElement("div");
    divall.addEventListener("click",function(){
        console.log(ele)
        clickfunction(ele)
    })
    var divgrid=document.createElement("div");

    var img=document.createElement("img");
    img.setAttribute("class","image")
    img.src=ele.img;

    var name=document.createElement("p");
    name.setAttribute("class","p")
    name.innerHTML=ele.name;

    var price=document.createElement("p");
    price.setAttribute("class","p")
    price.innerHTML="$"+ ele.price;

    var btn1=document.createElement("button");
    btn1.setAttribute("id","btn1")
    var btn2=document.createElement("button");
    btn2.setAttribute("id","btn2")
    var btn3=document.createElement("button");
    btn3.setAttribute("id","btn3")
    var btn4=document.createElement("button");
    btn4.setAttribute("id","btn4")
    var divbtn = document.createElement("div");
    divbtn.setAttribute("id","divbtn");
    divbtn.append(btn1,btn2,btn3,btn4)
    divall.append(img,name,price,divbtn);
    divall.addEventListener("click",function(){
        
        localStorage.setItem("cartdata",JSON.stringify(ele))
    })

    divgrid.append(divall)
    document.querySelector(".productitems").append(divgrid)

    
})
}

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

document.querySelector("#filter-select").addEventListener("change",function(){
    Shortfun()
})

function Shortfun(){
    var str=document.querySelector("#filter-select").value;
    console.log(str);
    var h=dataArr || []
    console.log(dataArr);
    if(str == "high"){
        h.sort(function(a, b) {
            return b.price - a.price
        })
    }
    else {
        h.sort(function(a, b) {
            return a.price - b.price
        })
    }
    document.querySelector(".productitems").innerHTML="";
    displayProduct(h)
}
function clickfunction(el){
    localStorage.setItem("clickeditem",JSON.stringify(el))
   window.location.href="description.html"
}