

window.onload = function() {
  console.log("load working");
};

function formSubmitClick() {
    var name = document.getElementById('name').value;
    if(name == '') {
        alert("Please enter name");
    }
    console.log("Name ", name);

}



