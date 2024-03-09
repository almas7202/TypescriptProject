class SignUp {
    name: string
    email: string;
    password: string | number;

    constructor(name: string, email: string, password: string | number) {
        this.name = name,
            this.email = email,
            this.password = password
    }
}


const signup = document.getElementById("signup") as HTMLCanvasElement
signup.addEventListener("click", () => {


    let name = document.getElementById("typeNameX") as HTMLInputElement
    let email = document.getElementById("typeEmailX") as HTMLInputElement
    let password = document.getElementById("typePasswordX") as HTMLInputElement


    if (name?.value == "") {

        let nameError = document.getElementById("name-error") as HTMLCanvasElement
        nameError.innerHTML = "Please enter email";

    }
    if (email?.value == "") {

        let emailError = document.getElementById("email-error") as HTMLCanvasElement
        emailError.innerHTML = "Please enter email";

    }
    if (password?.value == "") {
        let passwordError = document.getElementById("password-error") as HTMLCanvasElement
        passwordError.innerHTML = "Please enter password";
    }
    else {
        let user = new SignUp(name?.value, email?.value, password?.value)
        let arr = [];
        if (localStorage.getItem('data')) {
            arr = JSON.parse(localStorage.getItem('data'));
            arr.push(user);
            localStorage.setItem('data', JSON.stringify(arr));
        }
        else {
            arr.push(user);
            localStorage.setItem('data', JSON.stringify(arr));
        }
        window.location.href = "../login.html";
    }

})

