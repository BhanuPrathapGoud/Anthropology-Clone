
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
        img:"https://images.ctfassets.net/5de70he6op10/6qxOvpMN80sqbnIOz7Nx8m/23a6ca38dad134c31379b94d0810923c/HomeL1_Gateway_LS_02-1.jpg?w=856&q=80&fm=webp",
        name:"Shop furniture",
        price:1234.00,
        productId:1
    },
    {
        img:"https://images.ctfassets.net/5de70he6op10/5s7jtPdxJg5o4h3NPeVLcy/f375a1dd190d0b38d2208ce5098c3759/Furniture_Gateway_04.jpg?w=856&q=80&fm=webp",
        name:"Sitting Collection",
        price:1399.00,
        productId:2
    },
    {   img:"https://images.urbndata.com/is/image/Anthropologie/60235421_013_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Swirled drum Reclaimed",
        price:1298.00,
        productId:3
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/55331821-1089-VL0092-WFRG_b3?$a15-mto-tile$&hei=523&wid=349&qlt=80&fit=constrain",
        name:"Relaxed Saguaro Sofa ",
        price:2598.00,
        productId:4
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/57843872_004_b7?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Upcycled Wells Sofa",
        price:1998.00,
        productId:5

    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/52623394-1098-LT0070_b?$a15-mto-tile$&hei=523&wid=349&qlt=80&fit=constrain",
        name:"Goleta lather Sofa ",
        price:4978.00,
        productId:6
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/45201992AA_014_b15?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Margate reclaimed Wood Dinning table",
        price:2349.00,
        productId:8
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/64511314_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"amber lewis for Antharopologie Pedestal",
        price:1998.00,
        productId:9
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/64785454_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"ameila dinning Table",
        price:1698.00,
        productId:10
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/47343520_016_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Sonali Dinning table ",
        price:1698.00,
        productId:11
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/52086451_020_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Quillen marquetry",
        price:698.00,
        productId:12
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/65969370_000_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"mark D. sikes Persons Dinnng table",
        price:1197.00,
        productId:13
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/66895517_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Massaya & Co. Apanas Dinning Table",
        price:2198.00,
        productId:14
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/55364095_004_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Indoor/outdoor Dinning table",
        price:1698.00,
        productId:15
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/A45206080AF_010_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Handcarved Low Lombok Bed ",
        price:1998.00,
        productId:16
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/A45206080AF_041_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Modern Cushion Bed",
        price:1898.00,
        productId:17

    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/54286000_047_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Rosalie Four-Poster Bed",
        price:1998.00,
        productId:18

    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/34330019_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Pari Curved ratter Bed",
        price:1798.00,
        productId:19

    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/43882505-7560-SV0023-WDOV_b?$a15-mto-tile$&hei=523&wid=349&qlt=80&fit=constrain",
        name:"Ainsworth bed",
        price:2198.00,
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