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
var checkBoxArr = [];
// checkbox function
function checkBox(key, value, el) {
    console.log("key ", key);
    console.log("value ", value);
    console.log("el ", el);
    if(key == 1 && el.checked) {
        checkBoxArr.push(value);
    } else if(key == 2 && el.checked) {
        checkBoxArr.push(value);
    } else if(key == 1 && !el.checked) {
        checkBoxArr.filter(item => item != value)
    } else if(key == 2 && !el.checked) {
        checkBoxArr.filter(item => item != value)
    }
    console.log("checkBoxArr ", checkBoxArr);
}
// submit button click
function formSubmitClick() {
    // cust name
    var customerName = document.getElementById('name').value
    var nameError = document.getElementById("nameErrorDiv")
    if (customerName == "") {
        nameError.classList.remove('hideElement');
    }
    else {
        nameError.classList.add('hideElement');
    }
    // customer pass
    var customerPassword = document.getElementById('password').value;
    var passError = document.getElementById("passErrorDiv");
    if (customerPassword == "") {
        passError.classList.remove("hideElement");
    }
    else {
        passError.classList.add("hideElement")
    }
    // customer email
    var customerEmail = document.getElementById("mail").value;
    var customerMailId = document.getElementById("mailErrorDiv")
    if (customerEmail == "") {
        customerMailId.classList.remove("hideElement")
    } 
    else { 
        customerMailId.classList.add('hideElement') 
    }
    // gender
    var genderError = document.getElementById("genderErrorDiv")
    if (!document.getElementById("genderFemale").checked && !document.getElementById("genderMale").checked) {
        genderError.classList.remove("hideElement")
    }
    else {
        genderError.classList.add("hideElement")
    }
    // customer qualification
    var Degree = document.getElementById("Degree").value;
    var degreeError = document.getElementById("degreeErrorDiv")
    if (Degree == "") {
        degreeError.classList.remove("hideElement")
    }
    else { 
        degreeError.classList.add("hideElement") 
    }
      //customer engg. stream
    var Engineering = document.getElementById("Engineering").value;
    var engineerError = document.getElementById("engineerErrorDiv");
    if (Engineering == "") {
        engineerError.classList.remove("hideElement")
    } 
    else { 
        engineerError.classList.add("hideElement") 
    }
      //customer hobbies
    var ReadingBooks = document.getElementById("rbooks").value
    var playingChess = document.getElementById("pchess").value
    var hobbiesError = document.getElementById("hobbiesError")
    if (!document.getElementById("rbooks").checked && !document.getElementById("pchess").checked) {
        hobbiesError.classList.remove("hideElement")
    }
      //customer address
    var address = document.getElementById("text").value
    var addressError = document.getElementById("addressErrorDiv")
    if (address == '') {
        addressError.classList.remove("hideElement")
    }
    else { 
        addressError.classList.add("hideElement") 
    }
      //customer resume
    var resume = document.getElementById("myfile").value;
    var resumeError = document.getElementById("resumeErrorDiv");
    if (resume == '') {
        resumeError.classList.remove("hideElement")
    }
    else {
        resumeError.classList.add("hideElement")
    }
    var checkedGender = '';
    if(document.getElementById("genderFemale").checked) {
        checkedGender = document.getElementById("genderFemale").value
    } else if(document.getElementById("genderMale").checked) {
        checkedGender = document.getElementById("genderMale").value
    }
    //object for data
    formObj.name = document.getElementById('name').value;
    formObj.password = customerPassword;
    formObj.email = customerEmail;
    formObj.gender = checkedGender;
    formObj.degree = Degree;
    formObj.engineering = Engineering;
    formObj.address = address;
    formObj.resume = resume;

    console.log("formObj ", formObj);
}


