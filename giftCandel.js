
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
var dataArr=[
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/67587972_004_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Alexander Candel",
        price:20.00,
        productId:1
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/52733375_011_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Capri Blue capzi Jar Candel",
        price:28.00,
        productId:2
    },
    {   img:"https://images.urbndata.com/is/image/Anthropologie/67123141_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Casul Draped Knit Set ",
        price:180.00,
        productId:3
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/66933599_045_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Row Graden Villoo Pajama ",
        price:165.00,
        productId:4
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/65294936_011_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Living Mug",
        price:11.00,
        productId:5

    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/70258488_010_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Alo Glow System head To Toe Glow Oil",
        price:48.00,
        productId:6
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/67542654_079_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Moxy Collective Floral Pajama",
        price:58.00,
        productId:8
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/67442533_041_b15?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Moxy Collecctive Robe",
        price:129.00,
        productId:9
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/78189701_000_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Moglea candy beam Stationary Set",
        price:68.00,
        productId:10
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/69950285_004_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Striped Pillar Candel",
        price:30.00,
        productId:11
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/67477232_005_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Sequia Wood Pillar candel Holder",
        price:27.00,
        productId:12
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/67489450_010_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"The Moxy Collective Top",
        price:58.00,
        productId:13
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/69234557_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Grown Alchemist age Minis Kit",
        price:45.00,
        productId:14
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/48097422_070_b4?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Grecian Bust Pot",
        price:35.00,
        productId:15
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/64489289_043_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Kinder Glass jaer candel",
        price:25.00,
        productId:16
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/45263797AA_070_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Victoria Frame ",
        price:26.00,
        productId:17

    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/65780488_901_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Blockprinted Mongogram Mug",
        price:9.00,
        productId:18

    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/65577801_040_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Mary Floral Vasse",
        price:22.00,
        productId:19

    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/67476663_010_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Moxy Collective Floral Shorts",
        price:48.00,
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