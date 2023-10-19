
function validation() {
 if (document.Formfill.Email.value == "") {
    document.getElementById("error").innerHTML = "Email must be filled";
    return false;
  } else if (document.Formfill.Password.value == "") {
    document.getElementById("error").innerHTML = "Password must be filled";
    return false;
  } else if (document.Formfill.Password.value.length < 8) {
    document.getElementById("error").innerHTML =
      "Password must be at least 8 characters";
    return false;
  } else if (document.Formfill.CPassword.value == "") {
    document.getElementById("error").innerHTML =
      "Please re-enter your password";
    return false;
  } else if (
    document.Formfill.CPassword.value !== document.Formfill.Password.value
  ) {
    document.getElementById("error").innerHTML = "Password doesn't match";
    return false;
  } else if(
    document.Formfill.phoneno.value =="")
    {
      document.getElementById("error").innerHTML = "Phone number must be provided";
      return false;
    } else if(
      document.Formfill.gender.isEmpty()){
        document.getElementById("error").innerHTML = "Gender must be chosen";
        return false;
      } 

   let choosegender = "";
        const rb = document.getElementById("gender").length;

        for(i=0; i < rb; i++) {
          if(document.Formfill.gender[i].checked){
            choosegender = document.Formfill.gender[i].value;
          }
      }
      if (choosegender == ""){
        alert("Please select a gender")
        return false;
      } else {
        console.log(choosegender);
      }
}
