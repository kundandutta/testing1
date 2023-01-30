

window.onload = function() {
  console.log("load working");
};

function formSubmitClick() {
    var name = document.getElementById('name').value;
    if(name == '') {
        alert("Please enter name");
    }
    console.log("Name ", name);

    let password =document.getElementById("password").value;
    if(password == ""){
        alert("Please enter password");
    }
    console.log("Password", password);
    
    let mail = document.getElementById("mail").value;
    if(mail == ""){
        alert("Please Enter E-mail Id !");
    }
    console.log("Mail", mail)

}


