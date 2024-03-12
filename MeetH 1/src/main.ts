$(document).ready(function () {
  let value = JSON.parse(String(localStorage.getItem("user")));
  let admin = JSON.parse(String(localStorage.getItem("0")));

  let a = [];
  a.push(admin);
  console.log(a.length);

  $("#btnLogin").click(function (e) {
    e.preventDefault();
    if ($("#rollno").val() == "0") {
      if (String($("#rollno").val()).length == 0) {
        $("#errRollno").text("Roll No should not be Empty!!");
      }
      if (String($("#email").val()).length == 0) {
        $("#errEmail").text("Email should not be Empty!!");
      }
      if (String($("#pwd").val()).length == 0) {
        $("#errPwd").text("Password should not be Empty!!");
      }
      if (
        $("#rollno").val() == a[0].rollno &&
        $("#email").val() == a[0].email &&
        $("#pwd").val() == a[0].password
      ) {
        window.location.href = "../AdminControls/adminHome.html";
      } 
      else {
        $("#err").text("User Not Exist!!");
      }
    } else {
      for (let i = 0; i < value.length; i++) {
        console.log();

        if (String($("#rollno").val()).length == 0) {
          $("#errRollno").text("Roll No should not be Empty!!");
        }
        if (String($("#email").val()).length == 0) {
          $("#errEmail").text("Email should not be Empty!!");
        }
        if (String($("#pwd").val()).length == 0) {
          $("#errPwd").text("Password should not be Empty!!");
        }
        if (
          $("#rollno").val() == value[i].rollno &&
          $("#email").val() == value[i].email &&
          $("#pwd").val() == value[i].password
        ) {
          localStorage.setItem(value[i].rollno, JSON.stringify(value[i]));
          window.location.href = "../UserControls/userHome.html";
        } 
        else {
          $("#err").text("User Not Exist!!");
        }
      }
    }
  });
});