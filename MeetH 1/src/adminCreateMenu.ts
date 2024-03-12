$(document).ready(function () {
    $("#btnLogout").click(function () {
        window.location.href = "../index.html"
    })
    $("#btnSubmit").click(function () {

        let keys = Object.keys(localStorage);
        const d = new Date();
        let date = d.getUTCDate() + "/" + d.getMonth() + "/" + d.getFullYear();

        for (let i = 0; i < keys.length; i++) {
            if (date == keys[i]) {
                if (confirm("Today's Menu was already created. Are you sure you want to change the menu??")) {
                    localStorage.removeItem(keys[i]);
                }

            }
        }

        let todayFood = { "breakfast": "", "lunch": "", "snacks": "", "dinner": "" }
        todayFood.breakfast = String($("#breakfast").val());
        todayFood.lunch = String($("#lunch").val());
        todayFood.snacks = String($("#snacks").val());
        todayFood.dinner = String($("#dinner").val());


        let valid = true;
        if(!todayFood.breakfast){
            $("#errBreakfast").text("Breakfast should not be empty!!");
            valid = false;
        }
        if(!todayFood.lunch){
            $("#errLunch").text("Lunch should not be empty!!");
            valid = false;
        }
        if(!todayFood.snacks){
            $("#errSnacks").text("Snacks should not be empty!!");
            valid = false;
        }
        if(!todayFood.dinner){
            $("#errDinner").text("Dinner should not be empty!!");
            valid = false;
        }
        if(valid){
            localStorage.setItem(String(date), JSON.stringify(todayFood))
            alert("Menu created successfully.");
        }
        else{
            $("#err").text("Fill all the fields!!")
        }


    })
})
