$(document).ready(function(){
    $("#btnLogout").click(function(){
        window.location.href = "../index.html"
    })
    $("#btnSubmit").click(function(){
        
        let keys = Object.keys(localStorage);
        const d = new Date();
        let date = d.getUTCDate()+"/"+d.getMonth()+"/"+d.getFullYear();
        for(let i = 0; i<keys.length; i++){
            if(date == keys[i]){
                localStorage.removeItem(keys[i]);
            }
        }
        let todayFood = {"breakfast": "", "lunch": "", "snacks":"", "dinner":""}
        todayFood.breakfast = String($("#breakfast").val());
        todayFood.lunch = String($("#lunch").val());
        todayFood.snacks = String($("#snacks").val());
        todayFood.dinner = String($("#dinner").val());
        
        localStorage.setItem(String(date), JSON.stringify(todayFood))
        alert("Menu created successfully.");
    })
})
