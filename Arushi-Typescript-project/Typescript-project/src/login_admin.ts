interface Admin{
    username: string;
    password: string;
}

let admin: Admin;
let user = "Admin"
let pass = "admin"
admin = {username: user, password: pass}

let Admindet = []
Admindet.push(admin)
localStorage.setItem("Admin",JSON.stringify(Admindet))

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
        let data = JSON.parse(localStorage.getItem("Admin"))
        // console.log(data);
        let i;
        for(i of data){
            if(i["username"] == username?.value && i["password"] == password?.value){
                window.location.href= "./index.html"
            }
            else{
                    let error = document.getElementById("errors") as HTMLCanvasElement;
                    error.innerHTML = "<b><i>Incorrect Username OR Password.</i></b>"
                    error.style.color = "black"
                }
        }
        
    }

}

