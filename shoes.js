
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
var dataArr = [
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/60058286_020_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698",
        name: "Fisherman Sport Sandals",
        price: 125.00,
        productId: 37
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/60385945_009_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        name: "Seychelles Bits N' Pieces Woven Flats",
        price: 99.00,
        productId: 38
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/65368508_001_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        name: "Pilcro Twisted Leather Slides",
        price: 130.00,
        productId: 23
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/64998826_012_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698",
        name: "Guilhermina Square-Toe Ballet Flats",
        price: 120.00,
        productId: 39
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/68829134_024_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698",
        name: "Guilhermina Pointed-Toe Mary Janes",
        price: 140.00,
        productId: 40
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/63060966_016_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698",
        name: "Kelsi Dagger Brooklyn Lens Suede Loafers",
        price: 130.00,
        productId: 41
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/68947142_071_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698",
        name: "Angel Alarcon Patent-Leather Square-Toe Flats",
        price: 150.00,
        productId: 42
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/67426239_066_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        name: "Angel Alarcon Strappy Heels",
        price: 150.00,
        productId: 43
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/68774272_085_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        name: "CAVERLEY Mazie Heels",
        price: 185.00,
        productId:44
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/68542190_066_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698",
        name: "Vicenza Metallic Mules",
        price: 160.00,
        productId: 45
    },
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/66297565_068_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        name: "Bibi Lou Aoi Heels",
        price: 180.00,
        productId: 46
    },
    {
    img:"https://images.urbndata.com/is/image/Anthropologie/66043001_010_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    name:"K-Swiss Classic Sneakers",
    price: 80.00,
    productId:47
},
{
    img:"https://images.urbndata.com/is/image/Anthropologie/66043126_048_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698",
    name:"K-Swiss Classic Sneakers",
    price:70.00,
    productId:48
},
{
    img:"https://images.urbndata.com/is/image/Anthropologie/66976606_001_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    name:"Matisse Jelly Slide Sandals",
    price:28.00,
    productId:49
},
{
    img:"https://images.urbndata.com/is/image/Anthropologie/67128207_015_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    name:"Laidback London Diani Sandals",
    price:68.00,
    productId:50
},
{
    img:"https://images.urbndata.com/is/image/Anthropologie/67665521_015_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698",
    name:"Woven Platform Tie-Up Sandals",
    price:112.00,
    productId:51

},
{
    img:"https://images.urbndata.com/is/image/Anthropologie/67105452_059_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698",
    name:"Melissa Possession Degradee Flats",
    price:48.30,
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



var s=document.getElementById("searchApi")
s.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addData(document.getElementById("searchApi").value)
    }
});

async function addData(value){
    console.log(value);
    let res= await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&order_by=popular&client_id=Yz8awH82cVnQp-SW2c1VarbUkhVHzhlKrs26pZihfNk`)

    let data = await res.json()
    product1(data.results)
}

function product1(data){
    console.log(data)
    if(data.length==0){
        displayProduct(dataArr)
    }else{
    document.querySelector(".productitems").innerHTML=null
    data.forEach(function(ele){
        var divall=document.createElement("div");
        var divgrid=document.createElement("div");
    
        var img=document.createElement("img");
        img.setAttribute("class","image")
        img.src=ele.urls.raw;
    
        var name=document.createElement("p");
        name.setAttribute("class","p")
        name.innerHTML=ele.alt_description;
    
        var price=document.createElement("p");
        price.setAttribute("class","p")
        price.innerHTML="$"+ Math.floor(Math.random() * 1000);
        ;
    
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
}
function clickfunction(el){
    localStorage.setItem("clickeditem",JSON.stringify(el))
   window.location.href="description.html"
}