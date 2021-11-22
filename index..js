function printError(id,Msg){
    document.getElementById(Id).innerHTML =Msg;
}                       

function validateform(){
var name=d.form.name.value;
var mail=d.form.mail.value;
var password=d.form.password.value;
var confirm=d.form.confirm.value;
var mobile=d.form.mobile.value;

var namerr = mailErr = passwordErr = confirmErr = mobileErr = true;

if(name == ""){
    printError("namErr","write in capital letters");
    var elem =d.getElementById("name");   
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
}else{
    var regex =/^[a-zA-Z\s]+$/;
    if(regex.test(name) === false){
        printError("namErr" ,"enter a valid name");
        var elem =d.getElementById("name");   
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }else{
        printError("namErr","" ); 
        namErr =false;      
        var elem =d.getElementById("name");   
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }


    if(email == ""){
        printError("emailErr","enter your email");
        var elem =d.getElementById("email");   
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }else{
        var regex =/^\s+@\s+\.\s+$/;
        if(regex.test(email) === false){
            printError("emailErr" ,"enter a valid email");
            var elem =d.getElementById("email");   
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("emailErr","" ); 
            emailErr =false;      
            var elem =d.getElementById("email");   
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }

}




};