$(document).ready(function(){
    $("#btnLogout").click(function(){
        window.location.href = "../index.html"
    })
    let keys = Object.keys(localStorage)
    let d = new Date();
    let date = d.getUTCDate()+"/"+d.getMonth()+"/"+d.getFullYear();
    $("#date").text(date);
    for(let i = 0; i<keys.length; i++){
        if(keys[i] == date){
            let value = JSON.parse(String(localStorage.getItem(keys[i]))); 
            
            
            let arr=[]
            for(let j in value){
                arr.push(j);
                
            }
            let arr1 = [];
            arr1.push(value.breakfast);
            arr1.push(value.lunch);
            arr1.push(value.snacks);
            arr1.push(value.dinner);
            for(let j = 0; j<arr.length;j++){
                let tr = $("<tr></tr>");
               
                $("<td></td>").text(arr[j]).appendTo($(tr));
                $("<td></td>").text(arr1[j]).appendTo($(tr));
                $("table").append($(tr));
            }
            
        }
    }
})