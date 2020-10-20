function validateForm() {
    var x = document.forms["contact_me"]["Email"].value;
    if (x == "") {
      alert("I'd love to be able to respond to your inquiry. "
      +"Please fill in your email address and I will reach out shortly.");
      return false;
    }
  }