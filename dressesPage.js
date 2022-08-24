
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
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130010810001_053_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Amanda Uprichard Sequin Cutout Mini Dress",
        price: 246.00,
        productId:1
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130099510208_082_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Faithfull Babydoll Midi Dress",
        price:219.00,
        productId:2
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130916210042_040_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"The Marais Dress",
        price:180.00,
        productId:3
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130638280199_010_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Farm x Anthropologie Crochet Maxi Dresses",
        price:248.00,
        productId:4
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130930420004_000_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Ronny Kobo One-Shoulder Tropical Midi Dress",
        price:248.00,
        productId:5

    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130646420009_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"The Somerset Maxi Dress",
        price:168.00,
        productId:6
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130652010047_080_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"V-Neck Wrap Mini Dress",
        price:148.00,
        productId:7
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130916210078_049_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Emily Halter Mini Dress",
        price:140.00,
        productId:8
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130464030191_095_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Hutch High-Low Dress",
        price:198.00,
        productId:9
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130370060073_040_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Halter Side-Slit Maxi Dress",
        price:170.00,
        productId:10
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130464030187_038_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Hutch Ditsy-Printed Mini Dress",
        price:170.00,
        productId:11
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130226850016_060_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Blue Tassel Ruffled Waistless Mini Dress",
        price:148.00,
        productId:12
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130370060075_070_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Silk Colorblocked Maxi Dress",
        price:248.00,
        productId:13
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130024090110_050_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Corey Lynn Calter Balbina Strapless Mini Dress",
        price:198.00,
        productId:14
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130607630008_010_b15?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Maeve Strapless Lace Mini Dress",
        price:190.00,
        productId:15
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130456940035_049_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Verb by Pallavi Singhee Cut-Out Midi Dress",
        price:248.00,
        productId:16
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130464030186_029_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Hutch Floral Wrap Mini Skirt",
        price:180.00,
        productId:17
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130916210071_050_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"One-Shoulder Slik Midi Dress",
        price:260.00,
        productId:18
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130652010045_040_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Maeve Open-Back Wrap Midi Dress",
        price:148.00,
        productId:19
    },
    {
        img:"https://images.urbndata.com/is/image/Anthropologie/4130089450008_066_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name:"Pilcro Buttondown SHirt Dress",
        price:140.00,
        productId:20
    },
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