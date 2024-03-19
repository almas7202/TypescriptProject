import { person } from "./vendor";
import { consumerOperations } from "./consumer";

export function consumer_sign_up() {
    // let data = { "status": "success", "data": [{ "id": 1, "employee_name": "Tiger Nixon", "employee_salary": 320800, "employee_age": 61, "profile_image": "" }]}

    let consumer = new consumerOperations()
    let condata: person[]|[] = consumer.getData()


    let generate = document.getElementById("consumerGeneratePassword") as HTMLButtonElement
    let clear = document.getElementById("clear") as HTMLButtonElement
    clear.addEventListener("click", () => {
        console.log("hi");
        let products = document.getElementById("productOfindex")
        products?.classList.remove("hidden")


        let form = document.getElementById("myform") as HTMLFormElement
        form.reset()
        let password = document.getElementById("consumerPassword") as HTMLElement
        password.innerHTML = ""
        generate.removeAttribute("disabled")


        let main = document.getElementById("main")
        main?.classList.remove("class", "hidden")

        let formdiv = document.getElementById("consumersignup")
        formdiv?.setAttribute("class", "hidden login1")


    })



    generate.addEventListener("click", () => {
        console.log("im");


        let name = document.getElementById("consumerInputNameSignup") as HTMLInputElement | null
        let Address = document.getElementById("consumerInputAddressSignup") as HTMLInputElement | null
        let Contact_no = document.getElementById("consumerInputContactNoSignup") as HTMLInputElement | null
        let Pincode = document.getElementById("consumerInputPincodeSignup") as HTMLInputElement | null
        let Email = document.getElementById("consumerInputEmailSignup") as HTMLInputElement | null

        // console.log(name?.value, Address?.value, Contact_no?.value, Pincode?.value, Email?.value);

        let count: number = 0

        if (name?.value.length == 0) {
            let error = document.getElementById("validationConsumerInputNameSignup") as HTMLElement
            error.innerHTML = "Please Enter Name."
            name.classList.add("is-invalid");
        }
        else {
            let error = document.getElementById("validationConsumerInputNameSignup") as HTMLElement
            error.innerHTML = ""
            name?.classList.remove("is-invalid")
            count = count + 1
        }
        if (Address?.value.length == 0) {
            let error = document.getElementById("validationConsumerInputAddressSignup") as HTMLElement
            error.innerHTML = "Please Enter Address."
            Address.classList.add("is-invalid");
        }
        else {
            let error = document.getElementById("validationConsumerInputAddressSignup") as HTMLElement
            error.innerHTML = ""
            Address?.classList.remove("is-invalid")
            count = count + 1
        }

        let cno = Number(Contact_no?.value)
        // console.log(cno + "".length);

        if (Contact_no?.value.length == 0) {
            let error = document.getElementById("validationConsumerInputContactNoSignup") as HTMLElement
            error.innerHTML = "Please Enter Contact Number."
            Contact_no.classList.add("is-invalid");
        }
        else if ((cno.toString() == Contact_no?.value) && (Contact_no?.value.length == 10)) {
            // console.log("hi");
            let error = document.getElementById("validationConsumerInputContactNoSignup") as HTMLElement
            error.innerHTML = ""
            Contact_no.classList.remove("is-invalid")
            count = count + 1


        }
        else {
            let error = document.getElementById("validationConsumerInputContactNoSignup") as HTMLElement
            error.innerHTML = "Please Enter valid Contact Number."
            Contact_no?.classList.add("is-invalid");
        }
        let pno = Number(Pincode?.value)
        if (Pincode?.value.length == 0) {
            let error = document.getElementById("validationConsumerInputPincodeSignup") as HTMLElement
            error.innerHTML = "Please Enter Pincode Number."
            Pincode.classList.add("is-invalid");
        }
        else if ((pno.toString() == Pincode?.value) && (Pincode?.value.length == 6)) {
            let error = document.getElementById("validationConsumerInputPincodeSignup") as HTMLElement
            error.innerHTML = ""
            Pincode.classList.remove("is-invalid")
            count = count + 1

        }
        else {
            let error = document.getElementById("validationConsumerInputPincodeSignup") as HTMLElement
            error.innerHTML = "Please Enter valid Pincode Number."
            Pincode?.classList.add("is-invalid");
        }

        if (Email?.value.length == 0) {
            let error = document.getElementById("validationConsumerInputEmailSignup") as HTMLElement
            error.innerHTML = "Please Enter Email."
            Email.classList.add("is-invalid");
        }
        else {
            let error = document.getElementById("validationConsumerInputEmailSignup") as HTMLElement
            error.innerHTML = ""
            Email?.classList.remove("is-invalid")
            count = count + 1
        }
        if (count == 5) {
            generate.setAttribute("disabled", "true")
            console.log(1);




            if ((Contact_no?.value.length == 10) && (name?.value.length != 0)) {
                let conpw = name?.value + Contact_no?.value.slice(0, 5)
                let password = document.getElementById("consumerPassword") as HTMLElement

                password.innerHTML = "Congratulation Your account is successfully created and your password is :" + conpw



                if(name?.value&&Address?.value&&Pincode?.value&&Email?.value){
                    let currentConsumer: person = {
                        name: name.value,
                        address: Address.value,
                        email: Email.value,
                        contactNo: Number(Contact_no.value),
                        password: conpw ,
                        pincode: Number(Pincode.value),
                        id: condata.length
                    }
                    console.log(currentConsumer);
                    
                    consumer.addData(currentConsumer)
                    }


            }



        }


    })





}