
function validate(){
    var email= document.getElementById("emailId");
    var pattern = /^[0-9]{16}$/g;
    var result = pattern.test(email);
    var emailError =  document.getElementById("emailError");
    if(email.value.length == 0 || email.value == 'undefined' || email.value == 'null' || email.value==" "){
      error(emailError,"Please enter an email address",email);
    }
    else if (!result) {
      error(emailError,"Please provide a valid email address",email);
    }
    else{
      success(emailError,email);
    }
}

function setErrorFor( msg){
    
    
}

function setSuccessFor(msg){

}

function isEmail(email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    return (false)

}

function error(error,errorMessage,parent) {
  error.removeAttribute("style","display:none");
  error.innerHTML = errorMessage;
  error.setAttribute("style",`color:#ff0000;`);
  parent.setAttribute("style", "color: #ff0000; border: 1px solid #FF0000;");
}

function success(error,parent){
  error.innerHTML = '';
  error.setAttribute("style","display:none");
  parent.setAttribute("style", "border: 1px solid hsl(223, 87%, 63%);");
}