import { consumerOperations } from "./consumer";
import { product, productOperations } from "./products";
import { vendorInterface } from "./vendor";

let consumerOperation = new consumerOperations()

export function showproducts(vname: HTMLDivElement, productsDiv: HTMLDivElement) {
    $(document).ready(() => {
        let location = window.location.href.split("/")
        console.log("in");

        console.log(location);
        let flag = window.location.href.match("consumer")


        let productOperation = new productOperations()
        let products = productOperation.get()

        console.log(products);

        function filter(currentVendor: vendorInterface, currentProductList: product[]) {

            let vendor = $("<div></div>").appendTo(productsDiv)
            $("<p></p>").html(currentVendor["shopname"]).appendTo(vendor)
            let div = $("<div></div>").attr("class", "card-group row").appendTo(vendor)

            for (let indproduct of currentProductList) {
                let innerdiv = $("<div></div>").attr("class", "card-group col col-4").appendTo(div)
                $("<img></img>").attr("style", "height:100px;width:100px").attr("src", "/public/image/image.jpg").attr("alt", "...").attr("class", "card-img-top").appendTo(innerdiv)
                let cardbody = $("<div></div>").attr("class", "card-body").appendTo(innerdiv)

                $("<h5></h5>").text(indproduct["name"]).appendTo(cardbody)
                $("<p></p>").text("Price : " + indproduct["price"]).appendTo(cardbody)



                if (flag) {
                    $("<input>").attr("type", "button").val("Add to cart").click(() => {
                        consumerOperation.selectProduct(currentVendor, indproduct)
                    }).appendTo(cardbody)
                }
            }

        }


        for (let product of products) {


            let currentVendor: vendorInterface = product["vendata"]
            let currentProductList: product[] = product["productdata"]

            if (currentProductList.length != 0) {
                $("<p></p>").html(currentVendor["shopname"]).click(() => {
                    $(productsDiv).html("")
                    filter(currentVendor, currentProductList)
                }).appendTo(vname)

                let vendor = $("<div></div>").appendTo(productsDiv)


                $("<p></p>").html(currentVendor["shopname"]).appendTo(vendor)
                let div = $("<div></div>").attr("class", "card-group row").appendTo(vendor)

                for (let indproduct of currentProductList) {
                    let innerdiv = $("<div></div>").attr("class", "card-group col col-4").appendTo(div)
                    $("<img></img>").attr("style", "height:100px;width:100px").attr("src", "/public/image/image.jpg").attr("alt", "...").attr("class", "card-img-top").appendTo(innerdiv)
                    let cardbody = $("<div></div>").attr("class", "card-body").appendTo(innerdiv)

                    $("<h5></h5>").text(indproduct["name"]).appendTo(cardbody)
                    $("<p></p>").text("Price : " + indproduct["price"]).appendTo(cardbody)

                    if (flag) {
                        $("<input>").attr("type", "button").val("Add to cart").click(() => {
                            consumerOperation.selectProduct(currentVendor, indproduct)

                        }).appendTo(cardbody)
                    }
                }

            }
        }




    })
}

export function logoutConsumer() {
    consumerOperation.emptycart()
    let location = window.location.href.split("/")
    window.location.href = location[0] + location[1] + location[2]
}


export function cartFuncationality(){

}