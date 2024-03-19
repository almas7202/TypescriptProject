import { product, productOperations } from "./products";
import { vendorInterface } from "./vendor"
let vendor: vendorInterface;
let v1 = localStorage.getItem("currentVendor")
if (v1) {
    vendor = JSON.parse(v1)
}
else {
    vendor = {
        shopname: "",
        name: "",
        address: "",
        email: "",
        contactNo: 0,
        password: "",
        pincode: 0,
        id: 0
    }
}


let logout = document.getElementById("vendorLogOut") as HTMLButtonElement
logout.addEventListener("click", (event) => {
    event.preventDefault()
    let location = window.location.href.split("/")
    window.location.href = location[0] + location[1] + location[2]
    // console.log(window.location.href);
})


let products: {};
let productOperation = new productOperations()
products = productOperation.get()


export function productaddition() {


    let productName = document.getElementById("inputProduct") as HTMLInputElement
    let productPrice = document.getElementById("inputPrice") as HTMLInputElement
    let productQuantity = document.getElementById("inputQuantity") as HTMLInputElement
    let productID = productName.value + productPrice.value

    if (productName.value && productPrice.value && productQuantity.value) {

        let product: product = {
            Quantity: Number(productQuantity.value),
            id: productID,
            name: productName.value,
            price: Number(productPrice.value)
        }


        let error = document.getElementById("errorofproduct") as HTMLCanvasElement
        error.innerHTML = ""
        console.log(products);

        productOperation.add(product, vendor)
        $("#Productlist").html("")
        showProducts()

    }


    else {
        let error = document.getElementById("errorofproduct") as HTMLCanvasElement
        error.innerHTML = "fill all the details"
    }

}

export function showProducts() {
    let products = productOperation.getVenProduct(vendor)
    let productlistdiv = document.getElementById("Productlist") as HTMLDivElement
    let div = $("<div></div>").attr("class", "card-group row").appendTo(productlistdiv)
    for (let i in products) {
        let product = products[i]
        console.log(product);
        let innerdiv = $("<div></div>").attr("class", "card-group col col-3").attr("style", "padding:10px;margin:10px;border:solid #92c7cf").appendTo(div)

        $("<img></img>").attr("style", "height:100px;width:100px").attr("src", "/public/image/image.jpg").attr("alt", "...").attr("class", "card-img-top").appendTo(innerdiv)

        let cardbody = $("<div></div>").attr("class", "card-body").appendTo(innerdiv)

        $("<h5></h5>").text(product["name"]).appendTo(cardbody)
        $("<p></p>").text("Price :" + product["price"]).appendTo(cardbody)
        $("<p></p>").text("Listed Quantity :" + product["Quantity"]).appendTo(cardbody)


        $("<input>").attr("type", "number").attr("id", product["id"] + "edit").attr("placeholder", "quantity you want to store").appendTo(innerdiv)

        $("<input>").attr("type", "button").attr("class", "btn-secondary").val("edit").click(() => {
            let input1 = document.getElementById(product["id"] + "edit") as HTMLInputElement
            let input = input1?.value

            if (input1) {
                productOperation.modify(vendor, Number(i), Number(input))
                productlistdiv.innerHTML = ""
                showProducts()

            }
        }).appendTo(innerdiv)

        $("<input>").attr("type", "button").val("remove").click(() => {
            productOperation.remove(vendor, Number(i))
            productlistdiv.innerHTML = ""
            showProducts()
        }).appendTo(innerdiv)





    }
}



let add = document.getElementById("addProductbtn") as HTMLButtonElement
add.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("hi");

    productaddition()
})

showProducts()


// $(document).ready(() => {
//     try {
//         let orderdata: any = localStorage.getItem("orderhistory")
//         orderdata = JSON.parse(orderdata)
//         // console.log("ready");
//         console.log(orderdata);
//         let i: any;
//         for (i in orderdata) {
//             let order: any = orderdata[i]
//             let allproducts: any = orderdata[i]["products"]
//             let product: any
//             for (product of allproducts) {
//                 // let product:any = orderdata[i]["products"][0] 
//                 let consumer: any = orderdata[i]["consumer"][orderdata[i]["consumer"].length - 1]
//                 console.log(orderdata[i]);
//                 if (order["vendor"][0]["vpassword"] == vendor["vpassword"]) {
//                     let row = $("<tr></tr>").appendTo("#previous")
//                     $("<td></td>").text(product["productname"]).appendTo(row)
//                     $("<td></td>").text(product["quantity"]).appendTo(row)
//                     $("<td></td>").text(Number(product["quantity"]) * Number(product["price"])).appendTo(row)
//                     $("<td></td>").text(consumer["cname"]).appendTo(row)
//                     $("<td></td>").text(consumer["cAddress"]).appendTo(row)
//                     $("<td></td>").text("Completed").appendTo(row)
//                     // 
//                 }
//             }
//         }
//     }
//     catch {

//     }


// })