//   JavaScript Page

var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var age = document.getElementById("age");
var button = document.getElementById("submit");
var myForm = document.getElementById("myForm");

button.addEventListener("click", function (event) {
    alert(
        " First Name: " +
            firstName.value +
            ",Last Name: " +
            lastName.value +
            " Age: " +
            age.value
    );

    myForm.reset();
});
