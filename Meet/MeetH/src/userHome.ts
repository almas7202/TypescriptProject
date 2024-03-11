$(document).ready(function () {
    $("#btnLogout").click(function () {
        window.location.href = "../index.html"
    })
    let keys = Object.keys(localStorage)
    let d = new Date();
    
    
    
    let date = d.getUTCDate() + "/" + d.getMonth() + "/" + d.getFullYear();
    $("#date").text(date);
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] == date) {
            let value = JSON.parse(String(localStorage.getItem(keys[i])));


            let arr = []
            for (let j in value) {
                arr.push(j);

            }
            let arr1 = [];
            arr1.push(value.breakfast);
            arr1.push(value.lunch);
            arr1.push(value.snacks);
            arr1.push(value.dinner);

            for (let j = 0; j < arr.length; j++) {
                let tr = $("<tr></tr>");

                $("<td></td>").text(arr[j]).appendTo($(tr));
                $("<td></td>").text(arr1[j]).appendTo($(tr));
                $("<td></td>").html(`  
                    <span class="check"><input class="form-check-input" type="checkbox" value=${arr[j]} id=${arr[j]}></span>
                `).appendTo($(tr));
                $("table").append($(tr));


            }
            let student = [];
            let valueString = localStorage.getItem("attendence");
            if (valueString) {
                student = JSON.parse(valueString)
            }
            console.log(student[0].rollno);

            let arr2 = [];
            $("#btnSubmit").click(function () {

                if ($("#breakfast").prop('checked') == true) {
                    arr2.push("breakfast");
                }
                if ($("#lunch").prop('checked') == true) {
                    arr2.push("lunch");
                }
                if ($("#snacks").prop('checked') == true) {
                    arr2.push("snacks");
                }
                if ($("#dinner").prop('checked') == true) {
                    arr2.push("dinner");
                }
                let id;
                for (let j = 0; j < keys.length; j++) {
                    if (keys[j] != "user" && keys[j] != "attendence" && keys[j] != date && keys[j] != "0") {
                        id = keys[j]
                    }
                }
                let valid = true;
                for(let k = 0; k<student.length; k++){
                    if(id == student[k].rollno){
                        
                        valid = false;
                    }
                }
                if(valid){
                    let signupObj = { "rollno": "", "time": "" }
                    signupObj.rollno = String(id);
                    signupObj.time = String(arr2);
                    console.log(signupObj);
    
    
                    student.push(signupObj);
    
    
    
                    localStorage.setItem("attendence", JSON.stringify(student));
                    localStorage.removeItem(String(id))
                }
                else{
                    $("#err").text("You already gave attendence today!!")
                }









            })



        }

    }
})