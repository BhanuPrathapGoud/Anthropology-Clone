
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
        img:"https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Peacock Ottoman",
        price:498.00,
        productId:1
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/45246403AA_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Peakcook Indoor/Outdoor Daybed",
        price:998.00,
        productId:2
    },
    {   img:"https://images.urbndata.com/is/image/Anthropologie/A45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Peakcock Canbna Daybed",
        price:1998.00,
        productId:3
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/45549367-0000-SC0006_b3?$a15-mto-tile$&hei=523&wid=349&qlt=80&fit=constrain",
        name:"Barwick Indoor/outdoor Swivel Chair",
        price:1498.00,
        productId:4
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/55882518_041_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Peakcock Indoor/Outdoor Hanging Chair",
        price:598.00,
        productId:5

    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/33954074_035_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Reindeer Mos Wreath",
        price:75.00,
        productId:6
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/67531244_111_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Preserved Olive branch Bunch",
        price:36.00,
        productId:8
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/67909044_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Iron tropiary frame, teardrop",
        price:48.00,
        productId:9
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/65582645_006_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Furrow Ceremic Planter,7",
        price:32.00,
        productId:10
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/64082399_111_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Drien Mermaid Bunch",
        price:138.00,
        productId:11
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/65559882_030_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Roll Top Low ceramic Planter ,13",
        price:118.00,
        productId:12
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/67909069_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Iron Topiary frame, trellis",
        price:20.00,
        productId:13
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/62290259_072_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"dried Yarrow Bunch",
        price:21.00,
        productId:14
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/66895517_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Masaya dinning Table",
        price:2114.00,
        productId:15
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/69655785_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Rustic Stoneware Watering",
        price:30.00,
        productId:16
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/56292600_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"dried crapedia Bunch",
        price:15.00,
        productId:17

    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/66490830_018_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Celma Indoor/outdoor Pillow ",
        price:54.00,
        productId:18

    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/65582231_066_b5?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Remy Ceramic Footer Planter",
        price:34.00,
        productId:19

    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/69342681_000_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Framed reindeer Moss",
        price:98.00,
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