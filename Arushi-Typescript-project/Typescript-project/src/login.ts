interface login{
    username: any;
    password: any;
}

let data1 = JSON.parse(localStorage.getItem("user-data")) 
    console.log(data1);


function Validate() {
    let username = document.getElementById("user") as HTMLInputElement
    let password = document.getElementById("Password") as HTMLInputElement

    
    if (username?.value == "") {
        let error = document.getElementById("user-Err") as HTMLCanvasElement;
        error.innerHTML = "<b><i>This feild is required.</i></b>"
        error.style.color = "red"
    }
    if (password?.value == "") {
        let error = document.getElementById("pass-Err") as HTMLCanvasElement;
        error.innerHTML = "<b><i>This feild is required.</i></b>"
        error.style.color = "red"
    }
    else{
        let i;
        for(i of data1){
            //console.log(i["Username"]);

            if(i["Username"] == username?.value && i["Password"] == password?.value){
                let Login: login;
                Login = {username: username?.value, password: password?.value}
                let logins =[]
                logins.push(Login)
                localStorage.setItem("login", JSON.stringify(logins))
                window.location.href= "./User_details.html"
            }
            else{
                    let error = document.getElementById("errors") as HTMLCanvasElement;
                    error.innerHTML = "<b><i>Incorrect Username OR Password.</i></b>"
                    error.style.color = "black"
                }

            }
        
        }
    }




