function validasi() {
    let formx = document.forms["registrasi"]["username"].value
    if(formx == ""){
        alert("Please fill your username!")
        return false
    }
    else if(formx.length < 5 || formx.length >15){
        alert("Username length must be between 5 and 15!")
        return false
    }
    else if ( !isNaN(formx)) {
        alert("Username value must not just numbers!")
        return false
    }


    formx = document.forms["registrasi"]["password"].value
    if (formx == "") {
        alert("Please fill your password!")
        return false
    }
    else if (formx.length < 8) {
        alert("Password length must be more than 8 characters!")
        return false
    }


    let tempx = formx
    formx = document.forms["registrasi"]["ConfirmPassword"].value

    if(tempx!=formx){
        alert("Your password and confirm password are different!")
        return false
    }


    formx = document.forms["registrasi"]["FullName"].value
    if (formx == "") {
        alert("Please fill your Full Name!")
        return false
    }


    formx = document.getElementsByName("Gender")
    var flag = false
    for(let i=0;i<formx.length;i++){
        if(formx[i].checked){
            flag=true
        }
    }
    if(!flag){
        alert("Please choose your gender!")
        return false
    }


    formx = document.forms["registrasi"]["Email"].value
    if(formx==""){
        alert("Please fill your Email!")
        return false
    }


    formx = document.forms["registrasi"]["Age"].value
    if (formx == "") {
        alert("Please fill your age!")
        return false
    }
    else if (formx < 17) {
        alert("You must be older than 17y.o. to sign up!")
        return false
    }

    formx = document.getElementById("Agree")
    if (formx.checked == false) {
        alert("Please check the Agreement!")
        return false
    }
}




var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}