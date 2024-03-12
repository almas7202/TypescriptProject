$(document).ready(function () {
    $("#btnLogout").click(function () {
        window.location.href = "../index.html"
    })
    let value = JSON.parse(String(localStorage.getItem("attendence")))

    for (let i = 0; i < value.length; i++) {

        console.log(value);
        let d = new Date();
        let date = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear()
        $("tbody").html("")
        let tr = $("<tr></tr>")
        $("<td></td>").text(date).appendTo($(tr));
        $("<td></td>").text(value[i].time).appendTo($(tr));
        $("table").addClass("table table-striped").append($(tr));

    }
})