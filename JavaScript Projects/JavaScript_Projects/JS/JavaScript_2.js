function validateForm() {
    var x = document.forms["basic_form"]["email"].value;
    if (x =="") {
        alert("Please input your email address");
        return false;
    }
}
