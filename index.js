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

    var customerPassword = document.getElementById('password').value;
    var passError = document.getElementById("passErrorDiv");
    if (customerPassword == "") {
        passError.classList.remove("hideElement");
    }
    else {
        passError.classList.add("hideElement")
    }

    var customerEmail = document.getElementById("mail").value;
    var customerMailId = document.getElementById("mailErrorDiv")
    if (customerEmail == "") {
        customerMailId.classList.remove("hideElement")
    } 
    else { 
        customerMailId.classList.add('hideElement') 
    }

    var male = document.getElementById("genderMale").value;
    var female = document.getElementById("genderFemale").value;
    var genderError = document.getElementById("genderErrorDiv")
    if (!document.getElementById("genderFemale").checked && !document.getElementById("genderMale").checked) {
        genderError.classList.remove("hideElement")
    }
    else {
        genderError.classList.add("hideElement")
    }


    var Degree = document.getElementById("Degree").value;
    var degreeError = document.getElementById("degreeErrorDiv")
    if (Degree == "") {
        degreeError.classList.remove("hideElement")
    }
    else { 
        degreeError.classList.add("hideElement") 
    }

    var Engineering = document.getElementById("Engineering").value;
    var engineerError = document.getElementById("engineerErrorDiv");
    if (Engineering == "") {
        engineerError.classList.remove("hideElement")
    } 
    else { 
        engineerError.classList.add("hideElement") 
    }

    var ReadingBooks = document.getElementById("rbooks").value
    var playingChess = document.getElementById("pchess").value
    var hobbiesError = document.getElementById("hobbiesError")
    if (!document.getElementById("rbooks").checked && !document.getElementById("pchess").checked) {
        hobbiesError.classList.remove("hideElement")

    }

    var address = document.getElementById("text").value
    var addressError = document.getElementById("addressErrorDiv")
    if (address == '') {
        addressError.classList.remove("hideElement")
    }
    else { 
        addressError.classList.add("hideElement") 
    }

    var resume = document.getElementById("myfile").value;
    var resumeError = document.getElementById("resumeErrorDiv");
    if (resume == '') {
        resumeError.classList.remove("hideElement")
    }
    else {
        resumeError.classList.add("hideElement")
    }
    formObj.name = document.getElementById('name').value;
    formObj.password = customerPassword;
    formObj.email = customerEmail;
    formObj.gender = male;
    formObj.gender = female;
    formObj.degree = Degree;
    formObj.engineering = Engineering;
    formObj.address = address;
    formObj.resume = resume;


}
