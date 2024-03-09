let logindata: any
logindata = (localStorage.getItem('data'))
if (logindata) {
    logindata = JSON.parse(logindata)
}
console.log(logindata);


class Login {
    email: string;
    password: string | number;

    constructor(email: string, password: string | number) {
        this.email = email,
            this.password = password
    }
}


const login: any = document.getElementById("login") as HTMLCanvasElement
login.addEventListener("click", () => {



    let email = document.getElementById("typeEmailX") as HTMLInputElement
    let password = document.getElementById("typePasswordX") as HTMLInputElement


    if (email?.value == "") {

        let emailError = document.getElementById("email-error") as HTMLCanvasElement
        emailError.innerHTML = "Please enter email";

    }
    if (password?.value == "") {
        let passwordError = document.getElementById("password-error") as HTMLCanvasElement
        passwordError.innerHTML = "Please enter password";
    }

    else {
        for (let i of logindata) {
            if (email?.value == i["email"] && password?.value == i["password"]) {
                window.location.href = "../loginHomepage.html";
            }
            else {
                console.log("Error in login");

            }
        }
    }

})  