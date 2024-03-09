import './style.css'
import { consumer_sign_up } from './consumerSignUp'
import { vendor_sign_up } from './vendorSignUp'
import { consumer_sign_in } from './consumerSignIn'
import { vendor_sign_in } from './vendorSignIn'
import {showproducts} from "./consumerPage"


let customerSignUp = document.getElementById('consumer_sign_up') as HTMLCanvasElement
customerSignUp.addEventListener('click', (event) => {
  event.preventDefault()
  consumer_sign_up()
  let main = document.getElementById("main")
  main?.setAttribute("class", "hidden")

  // console.log("hi1");
  let formdiv = document.getElementById("consumersignup")
  formdiv?.classList.remove("hidden")

})

let customerSignUp1 = document.getElementById('consumer_sign_up1') as HTMLCanvasElement
customerSignUp1.addEventListener('click', (event) => {
  event.preventDefault()
  consumer_sign_up()
  let main = document.getElementById("consumersignin")
  main?.setAttribute("class", "hidden login1")

  // console.log("hi1");
  let formdiv = document.getElementById("consumersignup")
  formdiv?.classList.remove("hidden")

})

let vendorSignUp = document.getElementById('vendor_sign_up') as HTMLCanvasElement
vendorSignUp.addEventListener('click', (event) => {
  event.preventDefault()
  let main = document.getElementById("main")
  main?.setAttribute("class", "hidden")

  // console.log("hi1");
  let formdiv = document.getElementById("vendorsignup")
  formdiv?.classList.remove("hidden")
  // console.log("hi2");
  vendor_sign_up()


})
let vendorSignUp1 = document.getElementById('vendor_sign_up1') as HTMLCanvasElement
vendorSignUp1.addEventListener('click', (event) => {
  event.preventDefault()
  console.log("hi");
  
  let main = document.getElementById("vendorSignIN")
  main?.setAttribute("class", "hidden login1")

  // console.log("hi1");
  let formdiv = document.getElementById("vendorsignup")
  formdiv?.classList.remove("hidden")
  // console.log("hi2");
  vendor_sign_up()


})

let customerSignIn = document.getElementById("consumer_sign_in") as HTMLButtonElement

customerSignIn.addEventListener('click', (event) => {
  event.preventDefault()
  consumer_sign_in()
  let main = document.getElementById("main")
  main?.setAttribute("class", "hidden")

  // console.log("hi1");
  let formdiv = document.getElementById("consumersignin")
  formdiv?.classList.remove("hidden")

})


let vendorSignIn = document.getElementById("vendor_sign_in") as HTMLButtonElement

vendorSignIn.addEventListener('click', (event) => {
  event.preventDefault()
  // vendor_sign_in()
  let main = document.getElementById("main")
  main?.setAttribute("class", "hidden")

  // console.log("hi1");
  let formdiv = document.getElementById("vendorSignIN")
  formdiv?.classList.remove("hidden")
  vendor_sign_in()
})

let vendorSignIn1 = document.getElementById("vendor_sign_in1") as HTMLButtonElement

vendorSignIn1.addEventListener('click', (event) => {
  event.preventDefault()
  // vendor_sign_in()
  let main = document.getElementById("vendorsignup")
  main?.setAttribute("class", "hidden login1")

  // console.log("hi1");
  let formdiv = document.getElementById("vendorSignIN")
  formdiv?.classList.remove("hidden")
  vendor_sign_in()
})


let customerSignIn1 = document.getElementById("consumer_sign_in1") as HTMLButtonElement

customerSignIn1.addEventListener('click', (event) => {
  event.preventDefault()
  consumer_sign_in()
  let main = document.getElementById("consumersignup")
  main?.setAttribute("class", "hidden login1")

  // console.log("hi1");
  let formdiv = document.getElementById("consumersignin")
  formdiv?.classList.remove("hidden")

}) 
let vname = document.getElementById("vnamediv") as HTMLDivElement
let productdiv = document.getElementById("productdiv")as HTMLDivElement
showproducts(vname,productdiv)



