

import { product, productOperations } from "./products"
import { person, vendorInterface } from "./vendor"

let productOperation = new productOperations()

export class consumerOperations {
    getData(): [] | person[] {
        let data: string | null = localStorage.getItem("Consumerdetails")
        if (data) {
            return JSON.parse(data)
        }
        else {
            return []
        }
    }
    addData(consumer: person): void {

        let localdata: [] | person[] = this.getData()
        localdata[localdata.length] = consumer
        localStorage.setItem("Consumerdetails", JSON.stringify(localdata))

    }

    authenticate(email: string, password: string): person | boolean {

        let localdata: [] | person[] = this.getData()
        let i: person;
        for (i of localdata) {
            if ((i.email == email) && (i.password == password)) {
                localStorage.setItem("activeConsumer",JSON.stringify(i))
                return i
            }
        }
        return false
    }
    selectProduct(vendata: vendorInterface, product: product): void {
        let cart1: string | null = localStorage.getItem("cart")
        let cart: [] | { vendor: vendorInterface, product: product[] }[] = [];
        if (cart1) {
            cart = JSON.parse(cart1)
        }
        for (let i of cart) {
            let loopven: vendorInterface = i["vendor"]
            let loopproduct: product[] | [] = i["product"]
            if (loopven.id == vendata.id) {
                loopproduct[loopproduct.length] = product
                let productset = new Set(loopproduct)
                loopproduct = Array.from(productset)
                localStorage.setItem("cart", JSON.stringify(cart))
                return
            }
        }
        let j: { vendor: vendorInterface, product: product[] }= {
            vendor:vendata,
            product:[product]
        }
        cart[cart.length]=j
        localStorage.setItem("cart", JSON.stringify(cart))
        return
    }
    getActiveConsumer():person|void{
        let data:string|null = localStorage.getItem("activeConsumer") 
        if(data){
            return JSON.parse(data)
        }
    }
    removecurrentConsumer():void{
        localStorage.setItem("activeConsumer","")
    }
    emptycart():void{
        localStorage.setItem("cart", "")

    } 
    orderItem(){
        let orderHistory = productOperation.getOrderHistory() 

    }
}