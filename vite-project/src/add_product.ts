let product_list: product[] = []; // Declare an array to store Product objects
let last_productId: number = 0;
console.log(product_list);

// Load product_list from local storage when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const storedProducts = localStorage.getItem('product_list');
    if (storedProducts) {
        product_list = JSON.parse(storedProducts);
        last_productId = product_list.length > 0 ? product_list[product_list.length - 1].product_id + 1 : 0;
        show_data(); // Call the function to display the data
    }
});

export interface product {
    product_id: number;
    product_name: string;
    product_img: string;
    product_price: number;
    product_qty: number;
    product_category: string;
}

class productTest implements product {
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

document.getElementById('addproductbtn')!.addEventListener('click', (e) => {
    e.preventDefault();
    const product_id: number = last_productId++;
    const product_categoty: string = (<HTMLInputElement>document.getElementById('category')).value;
    const product_name: string = (<HTMLInputElement>document.getElementById('productName')).value;
    const product_img_input: HTMLInputElement = <HTMLInputElement>document.getElementById('productimg');
    const product_img_file: File | null = product_img_input.files ? product_img_input.files[0] : null;
    const product_img_path: string | null = product_img_file ? product_img_file.name : null;
    const product_price: number = parseInt((<HTMLInputElement>document.getElementById('productPrice')).value);
    const product_qty: number = parseInt((<HTMLInputElement>document.getElementById('productQty')).value);
    console.log(product_id);
    console.log(product_categoty);
    console.log(product_name);
    console.log(product_img_path); // This will log the name of the selected file
    console.log(product_price);
    console.log(product_qty);

    // You can store the file object itself in your array for future use
    if (product_img_file) {
        console.log("File object:", product_img_file);
        // Store product_img_file in your array or perform any other actions you need with it
    }
    const new_product = new productTest(product_id, product_name, product_img_path || '', product_price, product_qty, product_categoty);
    product_list.push(new_product);

    console.log(product_list);
    for (let i = 0; i < product_list.length; i++) {
        const product = product_list[i];
        console.log("ID:", product.product_id);
        console.log("Name:", product.product_name);
        console.log("Image:", product.product_img);
        console.log("Price:", product.product_price);
        console.log("Quantity:", product.product_qty);
        console.log("Category:", product.product_category);
        console.log("-------------------");
    }
    show_data();
    localStorage.setItem('product_list', JSON.stringify(product_list));
    localStorage.setItem('last_productId', last_productId.toString());
});

function show_data(): void {
    let tbody = document.getElementById('table_data');
    while (tbody?.hasChildNodes()) {
        tbody.removeChild(tbody.firstChild!);
    }
    for (let i = 0; i < product_list.length; i++) {
        const product = product_list[i];

        let tr: any = document.createElement('tr');

        let id: any = document.createElement('td');
        id.textContent = product.product_id;

        let category: any = document.createElement('td');
        category.textContent = product.product_category;

        let img: any = document.createElement('td');
        let imgElement = document.createElement('img');
        imgElement.src = `/home/almas.shaikh/Desktop/2986-MohammadAlmas.S-24-Mobile/TypeScript/Project/vite-project/assets/${product.product_img}`;
        imgElement.style.width = '100px'; // Set width
        imgElement.style.height = '100px'; // Set height
        img.append(imgElement);  // Append imgElement to the td

        let name: any = document.createElement('td');
        name.textContent = product.product_name;

        let price: any = document.createElement('td');
        price.textContent = product.product_price;

        let qty: any = document.createElement('td');
        qty.textContent = product.product_qty;

        tr?.append(id);
        tr?.append(category);
        tr?.append(img); // Append img to the table row
        tr?.append(name);
        tr?.append(price);
        tr?.append(qty);
        tbody?.append(tr);
    }
}

document.getElementById('showFormBtn')!.addEventListener("click", () => {
    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.style.display = "block";
    }
});
