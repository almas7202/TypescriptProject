interface vendor {
    vname: any,
    vAddress: any,
    vContact_no: any,
    vpin_code: any,
    vemail: any,
    vpassword: any,
    vshopName: any

}
export function vendor_sign_up() {


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
    // console.log((vendata));








    let generate = document.getElementById("vendorGeneratePassword") as HTMLCanvasElement
    let clear = document.getElementById("vendorclear") as HTMLButtonElement
    clear.addEventListener("click", (event) => {
        event.preventDefault()
        console.log("in");
        let main = document.getElementById("vendorsignup")
        main?.setAttribute("class", "hidden login1")

        // console.log("hi1");
        let formdiv = document.getElementById("main")
        formdiv?.classList.remove("hidden")
        let form = document.getElementById("myform1") as HTMLFormElement
        form.reset()
        let password = document.getElementById("vendorPassword") as HTMLElement
        password.innerHTML = ""
        generate.removeAttribute("disabled")
        // let login =  document.getElementById("loginFromSignup") as HTMLButtonElement
        // login.removeAttribute("disabled")
    })



    // document.getElementById("clear")?.addEventListener("click",()=>{
    //     document.getElementById("myform")?.reset
    // })


    generate.addEventListener("click", () => {


        let name = document.getElementById("vendorInputNameSignup") as HTMLInputElement | null
        let Address = document.getElementById("vendorInputAddressSignup") as HTMLInputElement | null
        let Contact_no = document.getElementById("vendorInputContactNoSignup") as HTMLInputElement | null
        let Pincode = document.getElementById("vendorInputPincodeSignup") as HTMLInputElement | null
        let Email = document.getElementById("vendorInputEmailSignup") as HTMLInputElement | null
        let shop = document.getElementById("vendorInputShopNameSignup") as HTMLInputElement | null

        // console.log(name?.value, Address?.value, Contact_no?.value, Pincode?.value, Email?.value);

        let count: number = 0

        if (name?.value.length == 0) {
            let error = document.getElementById("validationVendorInputNameSignup") as HTMLElement
            error.innerHTML = "Please Enter Name."
            name.classList.add("is-invalid");
        }
        else {
            let error = document.getElementById("validationVendorInputNameSignup") as HTMLElement
            error.innerHTML = ""
            name?.classList.remove("is-invalid")
            count = count + 1
        }
        if (shop?.value.length == 0) {
            let error = document.getElementById("validationVendorInputShopNameSignup") as HTMLElement
            error.innerHTML = "Please Enter Shop Name."
            shop.classList.add("is-invalid");
        }
        else {
            let error = document.getElementById("validationVendorInputShopNameSignup") as HTMLElement
            error.innerHTML = ""
            shop?.classList.remove("is-invalid")
            count = count + 1
        }
        if (Address?.value.length == 0) {
            let error = document.getElementById("validationvendorInputAddressSignup") as HTMLElement
            error.innerHTML = "Please Enter Address."
            Address.classList.add("is-invalid");
        }
        else {
            let error = document.getElementById("validationvendorInputAddressSignup") as HTMLElement
            error.innerHTML = ""
            Address?.classList.remove("is-invalid")
            count = count + 1
        }

        let cno = Number(Contact_no?.value)
        // console.log(cno + "".length);

        if (Contact_no?.value.length == 0) {
            let error = document.getElementById("validationVendorInputContactNoSignup") as HTMLElement
            error.innerHTML = "Please Enter Contact Number."
            Contact_no.classList.add("is-invalid");
        }
        else if ((cno.toString() == Contact_no?.value) && (Contact_no?.value.length == 10)) {
            // console.log("hi");
            let error = document.getElementById("validationVendorInputContactNoSignup") as HTMLElement
            error.innerHTML = ""
            Contact_no.classList.remove("is-invalid")
            count = count + 1


        }
        else {
            let error = document.getElementById("validationVendorInputContactNoSignup") as HTMLElement
            error.innerHTML = "Please Enter valid Contact Number."
            Contact_no?.classList.add("is-invalid");
        }
        let pno = Number(Pincode?.value)
        if (Pincode?.value.length == 0) {
            let error = document.getElementById("validationVendorInputPincodeSignup") as HTMLElement
            error.innerHTML = "Please Enter Pincode Number."
            Pincode.classList.add("is-invalid");
        }
        else if ((pno.toString() == Pincode?.value) && (Pincode?.value.length == 6)) {
            let error = document.getElementById("validationVendorInputPincodeSignup") as HTMLElement
            error.innerHTML = ""
            Pincode.classList.remove("is-invalid")
            count = count + 1

        }
        else {
            let error = document.getElementById("validationVendorInputPincodeSignup") as HTMLElement
            error.innerHTML = "Please Enter valid Pincode Number."
            Pincode?.classList.add("is-invalid");
        }

        if (Email?.value.length == 0) {
            let error = document.getElementById("validationVendorInputEmailSignup") as HTMLElement
            error.innerHTML = "Please Enter Email."
            Email.classList.add("is-invalid");
        }
        else {
            let error = document.getElementById("validationVendorInputEmailSignup") as HTMLElement
            error.innerHTML = ""
            Email?.classList.remove("is-invalid")
            count = count + 1
        }
        if (count == 6) {
            generate.setAttribute("disabled", "true")
            console.log(1);




            if ((Contact_no?.value.length == 10) && (name?.value.length != 0)) {
                let conpw = name?.value + Contact_no?.value.slice(0, 5)
                let password = document.getElementById("vendorPassword") as HTMLElement




                password.innerHTML = "Congratulation Your account is successfully created and your password is :" + conpw

                let vendor: vendor = {
                    vname: name?.value,
                    vAddress: Address?.value,
                    vContact_no: Contact_no?.value,
                    vpin_code: Pincode?.value,
                    vemail: Email?.value,
                    vpassword: conpw,
                    vshopName: shop?.value
                };

                vendata.push(vendor)
                vendata = JSON.stringify(vendata)
                localStorage.setItem("vendorSignupData", vendata)
            }



        }


    })





}