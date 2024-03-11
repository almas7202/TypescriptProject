$(document).ready(function () {
  // let keys = Object.keys(localStorage);
  // console.log(keys);
  let value = JSON.parse(String(localStorage.getItem("user")))
  console.log(value.length);
  let admin = JSON.parse(String(localStorage.getItem("0")));
  console.log(admin.length);
  
  let a = []
  a.push(admin)
  // console.log(a.rollno);
  
  $("#btnLogin").click(function (e) {
    e.preventDefault();
    if ($("#rollno").val() == "0") {
      
        for (let i = 0; i < a.length; i++) {
          if (String(($("#rollno").val())).length == 0) {
            $("#errRollno").text("Roll No should not be Empty!!");
          }
          if (String(($("#email").val())).length == 0) {
            $("#errEmail").text("Email should not be Empty!!");
          }
          if (String(($("#pwd").val())).length == 0) {
            $("#errPwd").text("Password should not be Empty!!");
          }
          if (($("#rollno").val() == a[i].rollno) && ($("#email").val() == a[i].email) && ($("#pwd").val() == a[i].password)) {
            window.location.href = "../AdminControls/adminHome.html"
          }
          else {
            $("#err").text("User Not Exist!!")
          }
        }
      
      
    }

    // let valid = true
    else {
      for (let i = 0; i < value.length; i++) {
        console.log();

        if (String(($("#rollno").val())).length == 0) {
          $("#errRollno").text("Roll No should not be Empty!!");
        }
        if (String(($("#email").val())).length == 0) {
          $("#errEmail").text("Email should not be Empty!!");
        }
        if (String(($("#pwd").val())).length == 0) {
          $("#errPwd").text("Password should not be Empty!!");
        }
        if (($("#rollno").val() == value[i].rollno) && ($("#email").val() == value[i].email) && ($("#pwd").val() == value[i].password)) {

          localStorage.setItem(value[i].rollno, JSON.stringify(value[i]))
          window.location.href = "../UserControls/userHome.html"

        }
        else {
          $("#err").text("User Not Exist!!")
        }




      }
    }






  })
})