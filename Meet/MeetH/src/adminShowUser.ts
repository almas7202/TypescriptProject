$(document).ready(function () {
    $("#btnLogout").click(function () {
        window.location.href = "../index.html"
    })
   
    function create() {
        let value = JSON.parse(String(localStorage.getItem("user")));
        
        let v = [];
        



        for (let i = 0; i < value.length; i++) {
            v.push(value[i]);
            
            let tr = $("<tr></tr>");
            $("<td></td>").text(value[i].rollno).appendTo($(tr));
            $("<td></td>").text(value[i].email).appendTo($(tr));
            $("<td></td>").html(`<input type="button" value="Delete" class="btn btn-danger">`).click(function () {

                if (confirm("Are you sure you want to delete this user?")) {
                    $("tbody").html("");
                    for (let j = 0; j < v.length; j++) {
                        if (v[j].rollno == value[i].rollno) {
                            v.splice(j, 1)
                        }

                    }
                    
                    localStorage.removeItem("user");
                    
                    localStorage.setItem("user", JSON.stringify(v));

                    $("tbody").html("");
                    create();
                    removeAttendence(value[i].rollno);
                }

            }).appendTo($(tr));
            $("table").addClass("table table-striped").append($(tr));


        }
        
    }
    function removeAttendence(v: any){
        let value1 = JSON.parse(String(localStorage.getItem("attendence")));
        let v1=[];
        for(let i =0; i<value1.length; i++){
            v1.push(value1[i]);
            for (let j = 0; j < v1.length; j++) {
                if (v1[j].rollno == v) {
                    v1.splice(j, 1)
                }

            }
            localStorage.removeItem("attendence");
                    
            localStorage.setItem("attendence", JSON.stringify(v1));
        }
    }
    create()

})
