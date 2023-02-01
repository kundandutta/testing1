

window.onload = function () {
    console.log("load working");
};

var formObj = {
    "name": "",
    "password": "",
    "email": "",
    "gender": "",
    "degree": "",
    "engineering": "",
    "hobbies": "",
    "address": "",
    "resume": ""
}

function formSubmitClick() {
    var customerName = document.getElementById('name').value
    var nameError = document.getElementById("nameErrorDiv")
    if (customerName == "") {
        nameError.classList.remove('hideElement');
    }
    else {
        nameError.classList.add('hideElement');
    }
    // alert("Please enter Customer name")
}
console.log("customerName ", name);

var customerPassword = document.getElementById("password").value;
var passError = document.getElementById("passErrorDiv");
if (customerPassword == "") {
    passError.classList.remove("hideElement");
}
    // alert("Please enter password");
else { 
    passError.classList.add("hideElement")
}
console.log("Customerpassword", password);

var Customeremail = document.getElementById("mail").value;
if (Customeremail == "") {
    //alert("Please Enter E-mail Id !");
}
console.log("Mail", mail);

var male = document.getElementById("male").value;
var female = document.getElementById("female").value;
if (!document.getElementById("female").checked && !document.getElementById("male").checked) {
    // (alert("please select atleast one option!"))
}
if (document.getElementById("male").checked) { console.log("Gender", male) }
if (document.getElementById("female").checked) { console.log("Gender", female) }

var Degree = document.getElementById("Degree").value;
if (Degree == "") { alert("please select degree") }
//console.log("Degree", Degree)

var Engineering = document.getElementById("Engineering").value;
if (Engineering == "") { alert("please select stream") }
// console.log("Engineering", Engineering)

var ReadingBooks = document.getElementById("rbooks").value
var playingChess = document.getElementById("pchess").value
if (!document.getElementById("rbooks").checked && !document.getElementById("pchess").checked) {
    //(alert("please select atleast one option!"))
}
if (document.getElementById("pchess").checked) { console.log("Hobbies", playingChess) }
if (document.getElementById("rbooks").checked) { console.log("Hobbies", ReadingBooks) }

var Address = document.getElementById("text").value
//if(Address ==""){alert("Fill the address box!")}

var Resume = document.getElementById("myfile").value

formObj.name = document.getElementById('name').value;
formObj.password = Customerpassword;
formObj.email = Customeremail;
formObj.gender = male;
formObj.gender = female;
formObj.degree = Degree;
formObj.engineering = Engineering;
formObj.address = Address;
formObj.resume = Resume;


console.log("form object ", formObj);
