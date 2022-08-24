
    var data=JSON.parse(localStorage.getItem("users")) ||[];
    document.querySelector("#btn12").addEventListener("click",logindata)
    function logindata(){
        event.preventDefault();
        var userEmail=document.querySelector("#email").value;
        var userPassword=form.password.value;
        var isUser = false;
        data.forEach(function(ele){
            if(userEmail==ele.userEmail && userPassword==ele.userPassword){
               isUser = true;
                return window.location.href="index.html";
            }
        })
        if(isUser)  {
            alert("Login successfull");
        }
        else {
            alert("User Not Exist");
            location.reload()
        }
    }
