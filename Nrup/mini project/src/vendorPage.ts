
try {
    let logout = document.getElementById("vendorLogOut") as HTMLButtonElement
    logout.addEventListener("click", (event) => {
        event.preventDefault()
        console.log(window.location.href);
        window.location.href = window.location.href.replace("vendor.html", "")
        // console.log(window.location.href);
    })
}
catch {

}
let vendor: any = localStorage.getItem("currentVendor")
if (vendor) {
    vendor = JSON.parse(vendor)
}
let products: any;
products = localStorage.getItem("VendorProducts")
try {
    if (products) {
        products = JSON.parse(products)
        products.push({ "vendorDetails": [vendor], Products: [], dboy: [] })
        console.log();

    }
    else {
        products = []
        products.push({ "vendorDetails": [vendor], Products: [], dboy: [] })
    }
}
catch {
    products = []
    products.push({ "vendorDetails": [vendor], Products: [], dboy: [] })
}

console.log(products[0]);
// console.log(products["product"]);

export function showProducts() {
    let productlistdiv = document.getElementById("Productlist") as HTMLDivElement
    for (let i in products) {
        let loopdetails = products[i]
        let loopven = loopdetails["vendorDetails"][0];
        let loopProduct = loopdetails["Products"];

        if (loopven.vpassword == vendor.vpassword) {
            for (let j in loopProduct) {
                let product = loopProduct[j]
                console.log(product);


                let mainDiv = document.createElement("div")
                mainDiv.setAttribute("class", "col col-4")
                mainDiv.setAttribute("style", "display:flex;width:25%;margin:2%;padding:2%")
                productlistdiv.appendChild(mainDiv)
                // let break1 = document.createElement("br")

                let imgdiv = document.createElement("div")
                imgdiv.setAttribute("class", "card h-100")

                mainDiv.appendChild(imgdiv)
                // mainDiv.appendChild(break1)

                let img = document.createElement("img")
                img.setAttribute("src", "/public/image/image.jpg")
                img.setAttribute("style", "height:100px;width:100px")
                img.setAttribute("class", "card-img-top")
                img.setAttribute("alt", "...")
                mainDiv.appendChild(img)
                // mainDiv.appendChild(break1)




                let header = document.createElement("h5")
                header.setAttribute("class", "card-title")
                let textofheader = document.createTextNode(product["name"])
                header.appendChild(textofheader)
                mainDiv.appendChild(header)

                let productprice = document.createElement("p")
                productprice.setAttribute("class", "card-text")
                let textProduct = document.createTextNode("Price :" + product["price"])
                productprice.appendChild(textProduct)
                mainDiv.appendChild(productprice)

                let productqnt = document.createElement("p")
                productqnt.setAttribute("class", "card-text")
                let textqnt = document.createTextNode("Listed Quantity :" + product["Quantity"])
                productqnt.appendChild(textqnt)
                mainDiv.appendChild(productqnt)

                let editqnt = document.createElement("input")
                editqnt.setAttribute("type", "number")
                editqnt.setAttribute("id", product["id"] + "edit")
                editqnt.setAttribute("style", "height:20px;width:25%")
                editqnt.setAttribute("placeholder", "Enter quantity you want to set")
                mainDiv.appendChild(editqnt)

                let editqntbrn = document.createElement("input")
                editqntbrn.setAttribute("type", "button")
                editqntbrn.value = "edit"
                editqntbrn.addEventListener("click", () => {
                    let input: any = document.getElementById(product["id"] + "edit") as HTMLInputElement
                    input = input?.value
                    if (input) {
                        product["Quantity"] = input
                        products = JSON.stringify(products)
                        localStorage.setItem("VendorProducts", products)
                        products = JSON.parse(products)
                        productlistdiv.innerHTML = ""
                        showProducts()

                    }
                })
                mainDiv.appendChild(editqntbrn)


                let removebrn = document.createElement("input")
                removebrn.setAttribute("type", "button")
                removebrn.value = "remove"
                removebrn.addEventListener("click", () => {

                    loopProduct.splice(j, 1)
                    products = JSON.stringify(products)
                    localStorage.setItem("VendorProducts", products)
                    products = JSON.parse(products)
                    productlistdiv.innerHTML = ""
                    showProducts()
                })
                mainDiv.appendChild(removebrn)

            }
        }



        // product[i]={"vendorDetails":[loopven],Products:loopProduct}
    }

}
export function productaddition() {
    console.log("hi");

    let current: any = {}
    current["vendor"] = vendor
    let product: any = {};
    current["product"] = product

    console.log(current);




    let productName = document.getElementById("inputProduct") as HTMLInputElement
    let productPrice = document.getElementById("inputPrice") as HTMLInputElement
    let productQuantity = document.getElementById("inputQuantity") as HTMLInputElement
    let productID = productName.value + productPrice.value

    if (productName.value && productPrice.value && productQuantity.value) {
        product["name"] = productName.value
        product["price"] = productPrice.value
        product["Quantity"] = productQuantity.value
        product["id"] = productID
        console.log(product);

        let error = document.getElementById("errorofproduct") as HTMLCanvasElement
        error.innerHTML = ""
        console.log(products);

        for (let i in products) {
            let loopdetails = products[i]
            let loopven = loopdetails["vendorDetails"][0];
            let loopProduct = loopdetails["Products"];
            if (loopven.vpassword == vendor.vpassword) {
                if (vendor) {
                    console.log("its gr8");
                    console.log(loopven["vpassword"] == vendor["vpassword"]);
                    if (loopven["vpassword"] == vendor["vpassword"]) {
                        loopProduct.push(product)
                        console.log("its gr8");
                        let productlistdiv = document.getElementById("Productlist") as HTMLDivElement
                        productlistdiv.innerHTML = ""
                        products = JSON.stringify(products)
                        localStorage.setItem("VendorProducts", products)
                        products = JSON.parse(products)
                        showProducts()


                    }
                }
            }



            // console.log(products);

            // product[i]={"vendorDetails":[loopven],Products:loopProduct}
        }

    }
    else {
        let error = document.getElementById("errorofproduct") as HTMLCanvasElement
        error.innerHTML = "fill all the details"
    }
    // console.log(current);
    // console.log(products);

    // products.push(current)




}

let add = document.getElementById("addProductbtn") as HTMLButtonElement
add.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("hi");

    productaddition()
})

showProducts()





let addDeliveryBoy1 = document.getElementById("addDeliveryBoybtn") as HTMLButtonElement
addDeliveryBoy1.addEventListener("click", (event) => {
    event.preventDefault()
    addDeliveryBoy()
})

export function addDeliveryBoy() {

    console.log("in");
    let current1: any = {}
    current1["vendor"] = vendor
    let dboy: any = {}
    current1["dboy"] = dboy
    // console.log(current1); 


    let dBoyName = document.getElementById("Dboyname") as HTMLInputElement
    let dBoyNumber = document.getElementById("dBoyNumber") as HTMLInputElement

    if (dBoyName.value && dBoyNumber.value) {
        dboy["name"] = dBoyName.value
        dboy["contactNo"] = dBoyNumber.value
        // console.log(current1);
        let error = document.getElementById("errorofdboy") as HTMLCanvasElement
        error.innerHTML = ""



        for (let i in products) {
            let loopdetails = products[i]
            let loopven = loopdetails["vendorDetails"][0];
            let loopDboy = loopdetails["dboy"];
            console.log(loopDboy);

            if (loopven.vpassword == vendor.vpassword) {
                if (dboy) {
                    // console.log("its gr8");
                    // console.log(loopven["vpassword"] == vendor["vpassword"]);
                    if (loopven["vpassword"] == vendor["vpassword"]) {
                        loopDboy.push(current1["dboy"])
                        console.log("its gr8");
                        console.log(products);
                        products = JSON.stringify(products)
                        localStorage.setItem("VendorProducts", products)
                        products = JSON.parse(products)
                    }
                }
            }



        }



    }
    else {
        let error = document.getElementById("errorofdboy") as HTMLCanvasElement
        error.innerHTML = "fill all the details"
    }
}
