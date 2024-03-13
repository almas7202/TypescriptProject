import { show_data } from "./add_product";
let product_list: product[] = []; // Declare an array to store Product objects
let last_productId: number = 0;
export interface product {
    product_id: number;
    product_name: string;
    product_img: string;
    product_price: number;
    product_qty: number;
    product_category: string;
}

export class productTest implements product {
    product_id: number;
    product_name: string;
    product_img: string;
    product_price: number;
    product_qty: number;
    product_category: string;

    constructor(id: number, name: string, img: string, price: number, qty: number, category: string) {
        this.product_id = id;
        this.product_name = name;
        this.product_img = img;
        this.product_price = price;
        this.product_qty = qty;
        this.product_category = category;
    }

    show_product():void{
        const storedProducts = localStorage.getItem('product_list');
        if (storedProducts) {
            product_list = JSON.parse(storedProducts);
            last_productId = product_list.length > 0 ? product_list[product_list.length - 1].product_id + 1 : 0;
            show_data(product_list); // Call the function to display the data
        }
    }

    add_product(product_category:string,product_name:string,product_price:number,product_qty:number,product_img:string):void{

        const product_id: number = last_productId++;
        const new_product =new productTest(product_id,product_category,product_name,product_price,product_qty,product_img)
        product_list.push(new_product)
        console.log(typeof(product_list));
        
        show_data(product_list);
        localStorage.setItem('product_list', JSON.stringify(product_list));
        localStorage.setItem('last_productId', last_productId.toString());
        
    }
}

