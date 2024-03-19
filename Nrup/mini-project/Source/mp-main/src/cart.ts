import { consumerOperations } from "./consumer"
import { productOperations, product } from "./products"
import { person } from "./vendor"
import { vendorInterface } from "./vendor"


let consumerOperation = new consumerOperations()
let productOperation = new productOperations()
let logoutConsumer = document.getElementById("logoutConsumer")
logoutConsumer?.addEventListener("click", () => {
    consumerOperation.removecurrentConsumer()
})

$(document).ready(() => {

    let orderhistory = productOperation.getOrderHistory()

    let consumer: person | void = consumerOperation.getActiveConsumer()


    let items: { vendor: vendorInterface, product: product[] }[] = productOperation.getCartData()

    if (items.length != 0) {
        let cartitems = document.getElementById("cartitems") as HTMLDivElement
        let i: {
            vendor: vendorInterface;
            product: product[];
        }
        let grandorder: any = {};
        try {
            for (let j in items) {
                i = items[j]
                let totalShopBillamount: number = 0;
                let selected_products:product[]|[] = []
                let shopOrder: { "vendor": vendorInterface, "consumer": person | void, "products": product[] } = {
                    "vendor": i["vendor"],
                    "products": selected_products,
                    "consumer": consumerOperation.getActiveConsumer()
                }
                

                let vendor: vendorInterface = i["vendor"]
                let productsOfTable: product[] = i["product"]
                grandorder[vendor["shopname"]] = shopOrder
                $("<caption></caption>").attr("id", vendor["shopname"] + "-" + j).text(vendor["shopname"]).appendTo(cartitems)
                let table = $("<table></table>").attr("id", "table" + vendor["shopname"]).attr("class", "table table-striped table-hover").appendTo(cartitems)

                let row = $("<tr></tr>").appendTo(table)
                $("<th></th>").text("Product Name").appendTo(row)
                $("<th></th>").text("Product price").appendTo(row)
                $("<th></th>").text("choose Quantity").appendTo(row)
                $("<th></th>").text("total price").appendTo(row)
                let productRow: product;
                for (productRow of productsOfTable) {
                    let row = $("<tr></tr>").appendTo(table)
                    $("<td></td>").text(productRow["name"]).appendTo(row)
                    $("<td></td>").text(productRow["price"]).appendTo(row)
                    let qnt = $("<td></td>").appendTo(row)
                    let option = $("<select></select>").attr("id", productRow["price"] + "-" + productRow["name"]).change(() => {


                    }).appendTo(qnt)
                    $("#" + productRow['price'] + "-" + productRow["name"]).change((event) => {
                        console.log(event["currentTarget"]["id"]);
                        let price1: string[] = event["currentTarget"]["id"].split("-")
                        let price = Number(price1[0])

                        option.attr("disabled", "true")
                        indtotal.text(Number(option.val()) * Number(price))
                        totalShopBillamount = (Number(option.val()) * Number(price)) + totalShopBillamount
                        console.log(totalShopBillamount);

            
                        console.log(totalShopBillamount);
                        update("amount" + vendor["shopname"])
                        console.log("amount" + vendor["shopname"]);

                        grandupdate()

                        update("amount" + vendor["shopname"])


                        let selected: product = {
                            "name": event["currentTarget"]["id"].split("-")[1],
                            "Quantity":Number(option.val()),
                            "id":selected_products.length+event["currentTarget"]["id"].split("-")[1], 
                            price:price
                        }
                        selected_products[selected_products.length]=(selected)


                    })
                    $("<option></option>").val(0).text("Choose quantity").appendTo(option)
                    $("<option></option>").val(1).text(1).appendTo(option)
                    $("<option></option>").val(2).text(2).appendTo(option)
                    $("<option></option>").val(3).text(3).appendTo(option)
                    $("<option></option>").val(4).text(4).appendTo(option)
                    $("<option></option>").val(5).text(5).appendTo(option)


                    let indtotal = $("<td></td>").text("0").appendTo(row)



                }
                $("<p></p>").attr("style", "margin:10px").attr("id", "amount" + vendor["shopname"]).appendTo(table)
                $("<input>").attr("type", "button").attr("class", "btn btn-info").click(() => {
                    // let a = $("#table" + vendor['vshopName']).html("Your order for shop " + vendor["vshopName"] + " is successfully placed")
                    let table = document.getElementById("table" + vendor['shopname']) as HTMLDivElement
                    table.innerHTML = "Your order for shop " + vendor["shopname"] + " is successfully placed"
                    let caption = document.getElementById(vendor["shopname"] + "-" + j) as HTMLCanvasElement
                    caption.innerHTML = ""
                    console.log(caption.id);
                    let del: any = caption.id.split("-")
                    del = del[1]

                    delete items[del]
                    localStorage.setItem("cart", JSON.stringify(items))

                    grandupdate()
                    console.log(grandorder);
                    // shopOrder["bill"] = totalShopBillamount
                    orderhistory.push(shopOrder)
                    orderhistory = JSON.stringify(orderhistory)
                    localStorage.setItem("orderhistory", orderhistory)
                    orderhistory = localStorage.getItem("orderhistory")
                    orderhistory = JSON.parse(orderhistory)
                    console.log(orderhistory);

                    delete grandorder[vendor["vshopName"]]
                    console.log(grandorder);


                }).appendTo(table).val("order from this shop")
                function update(id: any) {
                    console.log(totalShopBillamount);

                    shopOrder["bill"] = totalShopBillamount
                    let div: any = document.getElementById(id) as HTMLDivElement
                    if (div) {
                        div.innerHTML = "your total bill of this shop is " + totalShopBillamount
                        console.log(div);
                    }

                    // $("#" + id).text("your total bill of this shop is " + totalShopBillamount)
                }

            }
        }
        catch {

        }
        $("<h3></h3>").attr("style", "margin:10px;color:green;").attr("id", "grandamount").appendTo(cartitems)
        $("<input>").attr("type", "button").attr("class", "btn btn-success").click(() => {
            console.log(grandorder);
            for (let order in grandorder) {
                console.log(grandorder[order]);
                orderhistory.push(grandorder[order])
                orderhistory = JSON.stringify(orderhistory)
                localStorage.setItem("orderhistory", orderhistory)
                orderhistory = localStorage.getItem("orderhistory")
                orderhistory = JSON.parse(orderhistory)
                console.log(orderhistory);

            }
            localStorage.setItem("cart", "")
            $("body").html("<h1>Congratulation orders placed successfully</h1>")

        }).appendTo(cartitems).val("order from all shops")

        function grandupdate() {

            $("#grandamount").text("your total bill from all shops is " + totalCartBill)
        }
    }

})
