import './style.css'
import { consumer_sign_up } from './consumerSignUp'
import { vendor_sign_up } from './vendorSignUp'
import { consumer_sign_in } from './consumerSignIn'
import { vendor_sign_in } from './vendorSignIn'
import { showproducts } from "./consumerPage"
import { logoutConsumer } from './consumerPage'
import { cartFuncationality } from './consumerPage'
// import { emptyoldcurrentconsumer } from './cart'

try {
  let customerSignUp = document.getElementById('consumer_sign_up') as HTMLCanvasElement
  customerSignUp.addEventListener('click', (event) => {
    event.preventDefault()
    consumer_sign_up()
    let main = document.getElementById("main")
    main?.setAttribute("class", "hidden")

    let products = document.getElementById("productOfindex")
    products?.classList.add("hidden")

    // console.log("hi1");
    let formdiv = document.getElementById("consumersignup")
    formdiv?.classList.remove("hidden")

  })
}
catch {

}

try {
  let customerSignUp1 = document.getElementById('consumer_sign_up1') as HTMLCanvasElement
  customerSignUp1.addEventListener('click', (event) => {
    event.preventDefault()
    consumer_sign_up()
    let main = document.getElementById("consumersignin")
    main?.setAttribute("class", "hidden login1")

    let products = document.getElementById("productOfindex")

    products?.classList.add("hidden")
    // console.log("hi1");
    let formdiv = document.getElementById("consumersignup")
    formdiv?.classList.remove("hidden")

  })
}
catch {

}

try {
  let vendorSignUp = document.getElementById('vendor_sign_up') as HTMLCanvasElement
  vendorSignUp.addEventListener('click', (event) => {
    event.preventDefault()
    let main = document.getElementById("main")
    main?.setAttribute("class", "hidden")

    let products = document.getElementById("productOfindex")
    products?.classList.add("hidden")

    // console.log("hi1");
    let formdiv = document.getElementById("vendorsignup")
    formdiv?.classList.remove("hidden")
    // console.log("hi2");
    vendor_sign_up()


  })
}
catch {

}
try {
  let vendorSignUp1 = document.getElementById('vendor_sign_up1') as HTMLCanvasElement
  vendorSignUp1.addEventListener('click', (event) => {
    event.preventDefault()
    console.log("hi");

    let main = document.getElementById("vendorSignIN")
    main?.setAttribute("class", "hidden login1")

    let products = document.getElementById("productOfindex")
    products?.classList.add("hidden")
    // console.log("hi1");
    let formdiv = document.getElementById("vendorsignup")
    formdiv?.classList.remove("hidden")
    // console.log("hi2");
    vendor_sign_up()


  })
}
catch {

}

try {
  let customerSignIn = document.getElementById("consumer_sign_in") as HTMLButtonElement

  customerSignIn.addEventListener('click', (event) => {
    event.preventDefault()
    consumer_sign_in()
    let main = document.getElementById("main")
    main?.setAttribute("class", "hidden")

    let products = document.getElementById("productOfindex")
    products?.classList.add("hidden")

    // console.log("hi1");
    let formdiv = document.getElementById("consumersignin")
    formdiv?.classList.remove("hidden")

  })
}
catch {

}

try {
  let vendorSignIn = document.getElementById("vendor_sign_in") as HTMLButtonElement

  vendorSignIn.addEventListener('click', (event) => {
    event.preventDefault()
    // vendor_sign_in()
    let main = document.getElementById("main")
    main?.setAttribute("class", "hidden")

    let products = document.getElementById("productOfindex")
    products?.classList.add("hidden")
    console.log("hi1");
    let formdiv = document.getElementById("vendorSignIN")
    formdiv?.classList.remove("hidden")
    vendor_sign_in()
  })

}
catch {

}



try {
  let vendorSignIn1 = document.getElementById("vendor_sign_in1") as HTMLButtonElement

  vendorSignIn1.addEventListener('click', (event) => {
    event.preventDefault()
    // vendor_sign_in()
    let main = document.getElementById("vendorsignup")
    main?.setAttribute("class", "hidden login1")

    let products = document.getElementById("productOfindex")
    products?.classList.add("hidden")

    // console.log("hi1");
    let formdiv = document.getElementById("vendorSignIN")
    formdiv?.classList.remove("hidden")
    vendor_sign_in()
  })
} catch {

}

try {
  let customerSignIn1 = document.getElementById("consumer_sign_in1") as HTMLButtonElement

  customerSignIn1.addEventListener('click', (event) => {
    event.preventDefault()
    consumer_sign_in()
    let main = document.getElementById("consumersignup")
    main?.setAttribute("class", "hidden login1")

    let products = document.getElementById("productOfindex")
    products?.classList.add("hidden")

    // console.log("hi1");
    let formdiv = document.getElementById("consumersignin")
    formdiv?.classList.remove("hidden")

  })
} catch (error) {

}

try {
  let vname = document.getElementById("vnamediv") as HTMLDivElement
  let productdiv = document.getElementById("productdiv") as HTMLDivElement
  showproducts(vname, productdiv)
}
catch {

}


try {
  let vendor = document.getElementById("vendors") as HTMLDivElement
  let products = document.getElementById("products") as HTMLDivElement
  console.log(vendor);

  showproducts(vendor, products)
} catch (error) {
  console.log(error);

}



try {
  let allvendors = document.getElementById("all")
  allvendors?.addEventListener("click", () => {
    let vendor = document.getElementById("vendors") as HTMLDivElement
    let products = document.getElementById("products") as HTMLDivElement

    vendor.innerHTML = ""
    products.innerHTML = ""
    console.log(vendor);
    console.log(products);
    showproducts(vendor, products)
  })
}
catch {

}

try {
  let allvendors = document.getElementById("all")
  allvendors?.addEventListener("click", () => {
    let vendor = document.getElementById("vnamediv") as HTMLDivElement
    let products = document.getElementById("productdiv") as HTMLDivElement

    vendor.innerHTML = ""
    products.innerHTML = ""
    console.log(vendor);
    console.log(products);
    showproducts(vendor, products)
  })
}
catch {

}
try {
  let logout = document.getElementById("logoutConsumer")
  logout?.addEventListener("click", (event) => {
    event.preventDefault()
    logoutConsumer()
    let products = document.getElementById("productOfindex")
    products?.classList.remove("hidden")

  })

}
catch {

}

try {
  let addToCart = document.getElementById("addToCart")
  addToCart?.addEventListener("click", () => {
    // alert("in")
    cartFuncationality()
    // window.location.href = 
  })
}
catch {

}
