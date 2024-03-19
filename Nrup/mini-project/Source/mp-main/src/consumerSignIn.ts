import { person } from "./vendor";
import { consumerOperations } from "./consumer";

export function consumer_sign_in() {
    let consumer = new consumerOperations()
    let condata: person[]|[] = consumer.getData()


    let email = document.getElementById("consumerInputEmailSignin") as HTMLInputElement
    let password = document.getElementById("consumerInputpasswordSignin") as HTMLInputElement

    let submit = document.getElementById("consumerSignIn") as HTMLButtonElement
    submit.addEventListener("click", (event) => {
        event.preventDefault()
        let count = 0;
        if (email?.value.length == 0) {
            let error = document.getElementById("validationConsumerInputEmailSignin") as HTMLElement
            error.innerHTML = "Please Enter Email."
            email.classList.add("is-invalid");
        }
        else {
            let error = document.getElementById("validationConsumerInputEmailSignin") as HTMLElement
            error.innerHTML = ""
            email?.classList.remove("is-invalid")
            count = count + 1
        }
        if (password?.value.length == 0) {
            let error = document.getElementById("validationConsumerInputpasswordSignin") as HTMLElement
            error.innerHTML = "Please Enter Password."
            password.classList.add("is-invalid");
        }
        else {
            let error = document.getElementById("validationConsumerInputpasswordSignin") as HTMLElement
            error.innerHTML = ""
            password?.classList.remove("is-invalid")
            count = count + 1
        }
        if (count == 2) {
            let flag = true 
            let consumer = new consumerOperations()
            let status = consumer.authenticate(email.value, password.value)

            if (status) {
                console.log(status);
                console.log(email.value);
                console.log(password.value);
                
                
                let loc = window.location.href.split("/")
                console.log(loc);
                localStorage.setItem("currentConsumer", JSON.stringify(status))
                window.location.href = loc[0] + "/" + loc[1] + "/" + loc[2] + "/" + "consumer.html"
                flag = false
            }

            if (flag) {
                    let error = document.getElementById("consumerCheckPassword") as HTMLElement
                    error.innerHTML = "Enter valid email and/or password"
                }
                else{
                    let error = document.getElementById("consumerCheckPassword") as HTMLElement
                    error.innerHTML = ""
                    flag=true
              
                }

        }
    })














    let clear = document.getElementById("clearConsumerSignin") as HTMLButtonElement
    clear.addEventListener("click", () => {
        console.log("hi");
        let products = document.getElementById("productOfindex") 
    products?.classList.remove("hidden")
        let generate = document.getElementById("consumerCheckPassword") as HTMLButtonElement

        let form = document.getElementById("myform2") as HTMLFormElement
        form.reset()
        let password = document.getElementById("consumerCheckPassword") as HTMLElement
        password.innerHTML = ""
        generate.removeAttribute("disabled")


        let main = document.getElementById("main")
        main?.classList.remove("class", "hidden")

        let formdiv = document.getElementById("consumersignin")
        formdiv?.setAttribute("class", "hidden login1")

    })


}