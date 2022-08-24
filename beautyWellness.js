
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
var dataArr=[
    {   img:"https://images.urbndata.com/is/image/Anthropologie/65972366_067_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Mer-sea & Co. Shimmer Sun Lotion",
        price:28.00,
        productId:1
    },
    {   
        img:"https://images.urbndata.com/is/image/Anthropologie/65972341_000_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Mer-sea & Co. After Sun Soothe ",
        price:21.00,
        productId:2
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/65972374_000_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",

        name:"Mer-Sea & Afetr Sun Bath Saop ",
        price:24.00,
        productId:3
    },
    {   
        img:"https://images.urbndata.com/is/image/Anthropologie/65972358_000_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",

        name:"Mer-sea & Co. Sun Handler Dry Brush ",
        price:34.00,
        productId:4
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/40188179_000_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Capri Blue Volcano Hand Soap and body lotion",
        price:42.00,
        productId:5
    },
    {   
        img:"https://images.urbndata.com/is/image/Anthropologie/37010790_000_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Capri Blue Volcano Hand Cream ",
        price:28.00,
        productId:6
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/40522195_030_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Pharmacial Eva Du Perfume",
        price:48.00,
        productId:7
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/69266591_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Memo Paris Eva Du Prfume",
        price:300.00,
        productId:8
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/37394095_023_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Tocca Eva De Perfume",
        price:78.00,
        productId:9
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/42968990_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Mason PearSon Junior Brush ",
        price:195.00,
        productId:10
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/70531413_270_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Salt & stone Light  Weight Sheer Daily use Lotion ",
        price:34.00,
        productId:11
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/67983239_000_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Straw Fan",
        price:28.00,
        productId:12
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/76172741_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Eva NYC Thearpy Session Hair Mask",
        price:14.00,
        productId:13,

    },
    {   
        img:"https://images.urbndata.com/is/image/Anthropologie/78203908_080_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",

        name:"Apoto Orange Bl0soom",
        price:48.00,
        productId:14
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/38795720_010_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Sunday Relaiy Good sun bloosum with Reosoom",
        price:37.00,
        productId:15
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/64241839_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Vitruvi Stay Essential Oil",
        price:"159.00",
        productId:16
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/38368262_025_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Outerma Eva De Tollera",
        price:18.00,
        productId:17
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/69267805_001_b11?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"De La Hesart Lympathic Perfume",
        price:128.00,
        productId:18
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/68311299_010_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Objecto T3 Panel heater",
        price:248.00,
        productId:19
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/61510210_055_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Lelo Silva Vibrator",
        price:140.00,
        productId:20
    },
    ];
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