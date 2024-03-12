$(document).ready(function () {
    $("#btnLogout").click(function () {
        window.location.href = "../index.html"
    })
    let d = new Date();
    let date = d.getUTCDate()+"/"+d.getMonth()+"/"+d.getFullYear();
    let keys = Object.keys(localStorage);
    let valid = true;
    for(let i = 0; i<keys.length; i++){
        if(date == keys[i]){
            valid = true;
            break;
        }
        else{
            valid = false;
            
        }
    }
    if(valid){
        let value = JSON.parse(String(localStorage.getItem("attendence")));
        for (let i = 0; i < value.length; i++) {
            let tr = $("<tr></tr>");
            $("<td></td>").text(value[i].rollno).appendTo($(tr));
            $("<td></td>").text(value[i].time).appendTo($(tr));
            $("table").addClass("table table-striped").append($(tr));
    
        }
    }
    else{
        $("#err").text("Attendence is not submitted by any user!!")
        localStorage.removeItem("attendence")
    }

})