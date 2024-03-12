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
}

