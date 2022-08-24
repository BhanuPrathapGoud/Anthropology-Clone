
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
        img: "https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "FREECITY Super-Vintage Sweat Pants",
        price: 235.00,
        productId: 37
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/66667015_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "FREECITY Super-Vintage Long-Sleave Tee",
        price: 215.00,
        productId: 38
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/66667379_080_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "FREECITY Super-Vintage Sweat Pants",
        price: 235.00,
        productId: 23
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4112929840003_004_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Favorite Daughter Favorite Aunt Tee",
        price: 48.00,
        productId: 39
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/64892649_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "FREECITY Sweatpants",
        price: 148.00,
        productId: 40
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/A4112929840003_010_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Favorite Daughter Favorite Sister Tee",
        price: 48.00,
        productId: 41
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4111260840019_072_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Clare V. La Banane Tie-Dye Sweatshirt",
        price: 155,
        productId: 42
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4112260840030_012_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Clare V. La Banane Petite Graphic Tee",
        price: 99.00,
        productId: 43
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/68742410_272_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Sundry Rugby T-Shirt Dress",
        price: 158.00,
        productId:44
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4112261180007_010_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "MOTHER Lil Goodie Graphic Tee",
        price: 95.00,
        productId: 45
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/66125931_041_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "MOTHER Relaxed Funnel-Neck Sweatshirt",
        price: 198.00,
        productId: 46
    },
    {
    img:"https://images.urbndata.com/is/image/Anthropologie/4130010810001_053_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name:"Amanda Uprichard Sequin Cutout Mini Dress",
    price: 246.00,
    productId:47
},
{
    img:"https://images.urbndata.com/is/image/Anthropologie/4130099510208_082_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name:"Faithfull Babydoll Midi Dress",
    price:219.00,
    productId:48
},
{
    img:"https://images.urbndata.com/is/image/Anthropologie/4130916210042_040_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name:"The Marais Dress",
    price:180.00,
    productId:49
},
{
    img:"https://images.urbndata.com/is/image/Anthropologie/4130638280199_010_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name:"Farm x Anthropologie Crochet Maxi Dresses",
    price:248.00,
    productId:50
},
{
    img:"https://images.urbndata.com/is/image/Anthropologie/4130930420004_000_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name:"Ronny Kobo One-Shoulder Tropical Midi Dress",
    price:248.00,
    productId:51

},
{
    img:"https://images.urbndata.com/is/image/Anthropologie/4130646420009_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name:"The Somerset Maxi Dress",
    price:168.00,
    productId:52
}
];
displayProduct(dataArr)



function displayProduct(dataArr){
    dataArr.forEach(function(ele){
    var divall=document.createElement("div");
    var divgrid=document.createElement("div");
         
    divall.addEventListener("click",function(){
        
        clickfunction(ele)
    })
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
    display(h)
}




function clickfunction(el){
    localStorage.setItem("clickeditem",JSON.stringify(el))
   window.location.href="description.html"
}