import { vendorInterface } from "./vendor"
export interface product {
    Quantity: number,
    id: string,
    name: string
    price: number
}

export class productOperations {
    get() {
        let data = localStorage.getItem("productData")
        if (data) {
            return JSON.parse(data)
        }
        else{
            return []
        }
    }
    add(productdata: product, vendata: vendorInterface): void { 
        let allProductData = this.get()
        for (let i of allProductData) {
            let products: product[] = i["productdata"]
            let ven: vendorInterface = i["vendata"]
            if (ven.id == vendata.id) {
                products.push(productdata)
                localStorage.setItem("productData", JSON.stringify(allProductData))
                return
            }
        }
        allProductData.push({ "productdata": [productdata], "vendata": vendata })
        localStorage.setItem("productData", JSON.stringify(allProductData))

    }

    getVenProduct(vendor:vendorInterface):product[]|[]{
        let allProductData = this.get() 
        for (let i of allProductData) {
            let products: product[] = i["productdata"]
            let ven: vendorInterface = i["vendata"]
            if (ven.id == vendor.id) {
                return products
            }
        }
        return []
    }

    modify(vendor:vendorInterface,id:number,value:number):void{
        let allProductData = this.get()  
        for (let i of allProductData) {
            let products: product[] = i["productdata"]
            let ven: vendorInterface = i["vendata"]
            if (ven.id == vendor.id) {
                products[id]["Quantity"] = value 
                localStorage.setItem("productData", JSON.stringify(allProductData))
                return
            }
        }
    }

    remove(vendor:vendorInterface,id:number):void{
        let allProductData = this.get()  
        for (let i of allProductData) {
            let products: product[] = i["productdata"]
            let ven: vendorInterface = i["vendata"]
            if (ven.id == vendor.id) {
                products.splice(id, 1)

                localStorage.setItem("productData", JSON.stringify(allProductData)) 
                return 
            }
        }
    } 
    getOrderHistory(){
        let data = localStorage.getItem("orderHistory")
        if(data){
            return JSON.parse(data)
        }
    }
    getCartData():[] | { vendor: vendorInterface, product: product[] }[]{
        let data = localStorage.getItem("cart")
        if (data){
            return JSON.parse(data)

        }
        return []
    }
}