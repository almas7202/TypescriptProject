import { vendorOperations } from "./vendor"

export function vendor_sign_in() {




    let submit = document.getElementById("vendorSignIn") as HTMLButtonElement
    submit.addEventListener("click", (event) => {
        let email = document.getElementById("vendorInputEmailSignin") as HTMLInputElement
        let password = document.getElementById("vendorInputpasswordSignin") as HTMLInputElement
        event.preventDefault()
        let count = 0;
        if (email?.value.length == 0) {
            let error = document.getElementById("validationvendorInputEmailSignin") as HTMLElement
            error.innerHTML = "Please Enter Email."
            email.classList.add("is-invalid");
        }
        else {
            let error = document.getElementById("validationvendorInputEmailSignin") as HTMLElement
            error.innerHTML = ""
            email?.classList.remove("is-invalid")
            count = count + 1
        }
        if (password?.value.length == 0) {
            let error = document.getElementById("validationvendorInputpasswordSignin") as HTMLElement
            error.innerHTML = "Please Enter Password."
            password.classList.add("is-invalid");
        }
        else {
            let error = document.getElementById("validationvendorInputpasswordSignin") as HTMLElement
            error.innerHTML = ""
            password?.classList.remove("is-invalid")
            count = count + 1
        }

        if (count == 2) {
            let flag = true
            let vendor = new vendorOperations()
            let status = vendor.authenticate(email.value, password.value)



            if (status) {
                console.log(status);
                console.log(email.value);
                console.log(password.value);


                let loc = window.location.href.split("/")
                console.log(loc);
                localStorage.setItem("currentVendor", JSON.stringify(status))
                window.location.href = loc[0] + "/" + loc[1] + "/" + loc[2] + "/" + "vendor.html"
                flag = false
            }

            if (flag) {
                let error = document.getElementById("vendorCheckPassword") as HTMLElement
                error.innerHTML = "Enter valid email and/or password"
            }
            else {
                let error = document.getElementById("vendorCheckPassword") as HTMLElement
                error.innerHTML = ""
                flag = true
            }
        }


    })


    let clear = document.getElementById("clearvendorSignin") as HTMLButtonElement
    clear.addEventListener("click", () => {
        console.log("hi");
        let products = document.getElementById("productOfindex")
        products?.classList.remove("hidden")
        let signin = document.getElementById("vendorSignIn") as HTMLButtonElement

        let form = document.getElementById("myform3") as HTMLFormElement
        form.reset()
        let password = document.getElementById("vendorCheckPassword") as HTMLElement
        password.innerHTML = ""
        signin.removeAttribute("disabled")


        let main = document.getElementById("main")
        main?.classList.remove("class", "hidden")

        let formdiv = document.getElementById("vendorSignIN")
        formdiv?.setAttribute("class", "hidden login1")

    })


}