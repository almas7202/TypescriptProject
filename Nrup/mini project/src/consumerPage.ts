export function showproducts(vname: HTMLDivElement, productsDiv: HTMLDivElement) {
    let products: any = localStorage.getItem("VendorProducts")
    products = JSON.parse(products)
    console.log(products);
    for (let product of products) {


        let currentVendor = product["vendorDetails"]
        let currentProductList = product["Products"]
        $(document).ready(() => {
            $("<p></p>").html(currentVendor[0]["vname"]).click(() => {
                filter
            }).appendTo(vname)

            let vendor = $("<div></div>").appendTo(productsDiv)


            $("<p></p>").html(currentVendor[0]["vname"]).appendTo(vendor)
            let div = $("<div></div>").attr("class", "card-group row").appendTo(vendor)

            for (let indproduct of currentProductList) {
                let innerdiv = $("<div></div>").attr("class", "card-group col col-4").appendTo(div)
                $("<img></img>").attr("style", "height:100px;width:100px").attr("src", "/public/image/image.jpg").attr("alt", "...").attr("class", "card-img-top").appendTo(innerdiv)
                let cardbody = $("<div></div>").attr("class", "card-body").appendTo(innerdiv)

                $("<h5></h5>").text(indproduct["name"]).appendTo(cardbody)
                $("<p></p>").text("Price : " + indproduct["price"]).appendTo(cardbody)
            }

        })



    }

}