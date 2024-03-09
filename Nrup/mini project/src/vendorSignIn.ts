

export function vendor_sign_in() {

    let vendata: any;
    try {
        vendata = localStorage.getItem("vendorSignupData")

        console.log(1);
        if (!vendata) {
            // console.log(1211);
            vendata = []
        }
        else {
            vendata = JSON.parse(vendata)
        }

    }
    catch {
        vendata = []
        // console.log(2);

    }



console.log(vendata);






    let email = document.getElementById("vendorInputEmailSignin") as HTMLInputElement
    let password = document.getElementById("vendorInputpasswordSignin") as HTMLInputElement

    let submit = document.getElementById("vendorSignIn") as HTMLButtonElement
    submit.addEventListener("click", (event) => {
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
            let flag = true;
            for (let i of vendata) { 
                console.log(i);
                
                let pw = i["vpassword"]
                let email1 = i["vemail"]
                console.log(pw,password.value);
                console.log(email.value==email1);
                
                
                if (pw == password?.value && email1 == email?.value) {
                   console.log("in");
                   let loc = window.location.href.split("/")
                   console.log(loc);
                   localStorage.setItem("currentVendor",JSON.stringify(i))
                    window.location.href = loc[0]+"/"+loc[1]+"/"+loc[2]+"/"+"vendor.html"
                    flag = false
                }

            }
            if (flag) {
                let error = document.getElementById("vendorCheckPassword") as HTMLElement
                error.innerHTML = "Enter valid email and/or password"
            }
            else {
                let error = document.getElementById("vendorCheckPassword") as HTMLElement
                error.innerHTML = ""
                flag=true

            }
        }


    })


    let clear = document.getElementById("clearvendorSignin") as HTMLButtonElement
    clear.addEventListener("click", () => {
        console.log("hi");
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