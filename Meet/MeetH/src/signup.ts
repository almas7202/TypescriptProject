$(document).ready(function () {

  let student = [];
  let valueString = localStorage.getItem("user");
  if (valueString) {
    student = JSON.parse(valueString)
  }





  $("#btnSignup").click(function () {


    let signupObj = { "rollno": "", "email": "", "password": "" }
    signupObj.rollno = String($("#rollno").val());
    signupObj.email = String($("#email").val());
    signupObj.password = String($("#pwd").val());
    console.log(signupObj);
    let valid = true;
    for (let i = 0; i < student.length; i++) {
      if (student[i].rollno == signupObj.rollno) {
        $("#err").text("User already exist with this roll no!!");
        valid = false;
      }
    }
    if ((signupObj.rollno).length == 0) {
      $("#errRollno").text("Roll No should not be Empty!!");
      valid = false;
    }
    if ((signupObj.email).length == 0) {
      $("#errEmail").text("Email should not be Empty!!");
      valid = false;
    }
    let e = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!e.test(signupObj.email)) {
      $("#errEmail").text("Enter email in proper format!!");
      valid = false;
    }
    if ((signupObj.password.length) == 0) {
      $("#errPwd").text("Password should not be Empty!!");
      valid = false;
    }
    if ((signupObj.password.length) < 6) {
      $("#errPwd").text("Password should containe atleast 6 characters!!");
      valid = false;
    }
    if (signupObj.rollno == "0") {
      localStorage.setItem("0", JSON.stringify(signupObj))
      window.location.href = '../AdminControls/adminHome.html';
    }
    else {
      if (valid) {
        student.push(signupObj);
        localStorage.setItem("user", JSON.stringify(student));
        localStorage.setItem(signupObj.rollno, JSON.stringify(signupObj))
        window.location.href = "../UserControls/userHome.html";
      }
    }







  })
})