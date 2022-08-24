
   document.querySelector("form").addEventListener("submit",signup)
   function signup()
   {
       event.preventDefault()

       var objInfo ={
           userName:form.name.value,
           userEmail:form.email.value,
           userPassword:form.password.value,
       }
       var userData = JSON.parse(localStorage.getItem("users")) || [];
       userData.push(objInfo)
       localStorage.setItem("users",JSON.stringify(userData))
       document.addEventListener("submit",alt)
       document.querySelector("form").reset();
       window.location.href="loginpage.html"
    }
    
    function alt(){
       alert("account created successfully")
   }
