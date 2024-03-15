import {product} from './InvoiceItem'
document.addEventListener('DOMContentLoaded', () => {
    let user_name = localStorage.getItem('login_maintaine')
    console.log(user_name);
    if (user_name) {
        make_invoice()
    }else{
        alert('Please Login First')
    }
})


function make_invoice() {
    // Load product_list from local storage
    let product_list: product[] = JSON.parse(localStorage.getItem('product_list') || '[]');
    console.log(product_list);


    // Define invoice array
    let invoiceArray: { product_id: number, product_name: string, product_price: number, product_img: string }[] = [];


    // let invoicemake :{product_id:number,product_name:string,product_price:number,product_qty:number}[]

    // Function to generate cards dynamically
    function generateCards(): void {
        const cardContainer = document.getElementById('card-container');
        console.log(cardContainer);

        if (!cardContainer) return;

        cardContainer.innerHTML = ''; // Clear previous cards

        product_list.forEach(product => {
            if (product.product_qty >= 1) {
                // Create card container
                const cardDiv = document.createElement('div');
                cardDiv.classList.add('card', 'mb-3', 'mt-2');

                // Create card image
                const imgElement = document.createElement('img');
                imgElement.src = `/home/almas.shaikh/Desktop/2986-MohammadAlmas.S-24-Mobile/TypeScript/Project/vite-project/assets/${product.product_img}`;
                imgElement.classList.add('card-img-top');
                imgElement.alt = 'Product Image';
                cardDiv.appendChild(imgElement);

                // Create card body
                const cardBodyDiv = document.createElement('div');
                cardBodyDiv.classList.add('card-body');

                // Create card title
                const title = document.createElement('h5');
                title.classList.add('card-title');
                title.textContent = product.product_name;
                cardBodyDiv.appendChild(title);

                // Create card text
                const text = document.createElement('p');
                text.classList.add('card-text');
                text.textContent = `Price: ${product.product_price}, Available Quantity: ${product.product_qty}`;
                cardBodyDiv.appendChild(text);

        
                // Create add to invoice button
                const addToInvoiceBtn = document.createElement('button');
                const uniqueId = `invoicebtn${product.product_id}`;
                addToInvoiceBtn.id = uniqueId;
                addToInvoiceBtn.classList.add('btn', 'btn-primary', 'mt-2');
                addToInvoiceBtn.textContent = 'Add To Invoice';
                addToInvoiceBtn.addEventListener('click', () => {
                    // const product_input_qty : number = parseInt((<HTMLInputElement>document.getElementById('inputQtyid')).value);
                    console.log(product.product_qty);
                    const { product_id, product_name, product_price, product_img } = product;
                    invoiceArray.push({ product_id, product_name, product_price, product_img });
                    console.log("Product added to invoice:", { product_id, product_name, product_price, product_img });                
                    invoiceCardgenerated(invoiceArray)
                    
                });
                cardBodyDiv.appendChild(addToInvoiceBtn);

                // Append card body to card container
                cardDiv.appendChild(cardBodyDiv);

                // Append card container to card container element
                cardContainer.appendChild(cardDiv);
            }
        });
    }

    // Call the function to generate cards
    generateCards();
    let invoiceGreed: any = document.getElementById('invoiceGreed');

    // let invoiceGreed: any = document.getElementById('invoiceGreed');

    let btninvoicebtn: any = document.createElement('button');
    btninvoicebtn.innerHTML = "Get Invoice";
    btninvoicebtn.setAttribute('class', 'btn btn-primary');
    btninvoicebtn.setAttribute('style', 'width:50%');
    btninvoicebtn.setAttribute('style','display:none;')
    invoiceGreed.append(btninvoicebtn);



interface InvoiceItem {
    product_id: number;
    product_name: string;
    product_price: number;
    product_img: string;
    product_quantity: number; // Make product_quantity optional by adding "?"
}
                           

    function invoiceCardgenerated(array: InvoiceItem[]): void {
        console.log(array);
        btninvoicebtn.setAttribute('style','display:block;')
        const invoiceContainer = document.getElementById('invoicedata');
        if (!invoiceContainer) return;
        invoiceContainer.innerHTML = ''; // Clear previous cards

        array.forEach(product => {

            // Create card container
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card', 'mb-3', 'mt-2');

            // Create card image
            const imgElement = document.createElement('img');
            imgElement.src = `/home/almas.shaikh/Desktop/2986-MohammadAlmas.S-24-Mobile/TypeScript/Project/vite-project/assets/${product.product_img}`;
            imgElement.classList.add('card-img-top');
            imgElement.alt = 'Product Image';
            cardDiv.appendChild(imgElement);

            // Create card body
            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.classList.add('card-body');

            // Create card title
            const title = document.createElement('h5');
            title.classList.add('card-title');
            title.textContent = product.product_name;
            cardBodyDiv.appendChild(title);

            // Create card text
            const text = document.createElement('p');
            text.classList.add('card-text');
            text.textContent = `Price: ${product.product_price}`;
            cardBodyDiv.appendChild(text);

            const div = document.createElement('div');
            div.setAttribute('style', "display:flex");

            const plus = document.createElement('button');
            plus.classList.add('btn-primary');
            plus.innerHTML = '+';
            div.appendChild(plus);
            plus.addEventListener("click", () => {
                let product_qty: number = parseInt((<HTMLInputElement>document.getElementById('productQty')).value);
                product_qty++;
                qty.value = product_qty.toString();
                product.product_quantity = product_qty; // Update product quantity
            });

            const qty: any = document.createElement('input');
            qty.classList.add('form-control');
            qty.setAttribute('id', 'productQty');
            qty.setAttribute('min', '0');
            qty.setAttribute('disabled','true')
            qty.setAttribute("style", "width :85px;margin-left : 20px");
            qty.value = '1';
            product.product_quantity = qty.value
            div.appendChild(qty);

            const minus = document.createElement('button');
            minus.classList.add('btn-primary');
            minus.setAttribute("style", "margin-left : 20px");
            minus.innerHTML = '-';
            div.appendChild(minus);

            minus.addEventListener('click', () => {
                let product_qty: number = parseInt((<HTMLInputElement>document.getElementById('productQty')).value);
                if (product_qty == 0) {
                    alert('Please Increase the Quantity');
                } else {
                    product_qty--;
                }
                qty.value = product_qty.toString();
                product.product_quantity = product_qty; // Update product quantity
            });

            cardBodyDiv.append(div);

            // Append card body to card container
            cardDiv.appendChild(cardBodyDiv);

            // Append card container to card container element
            invoiceContainer.appendChild(cardDiv);
        });
    }
    btninvoicebtn.addEventListener('click', () => {
        console.log('Button Click', invoiceArray);
        // let product_qty: number = parseInt((<HTMLInputElement>document.getElementById('productQty')).value);
        console.log(product_list);


        product_list.forEach(product => {
            invoiceArray.forEach(invoiceproduct => {
                let product_qty: number = parseInt((<HTMLInputElement>document.getElementById('productQty')).value);
                if (product.product_id == invoiceproduct.product_id ) {
                    if(product.product_qty >= product_qty){
                        product.product_qty = product.product_qty - product_qty
                    }else{
                        alert(`${product.product_name} Not Engough Quantity Avilable`)
                        return 
                    }
                    localStorage.setItem('product_list', JSON.stringify(product_list)); 
                    window.location.href = 'index.html';
                    console.log(product_list); 
                }
            })
          
        })

        localStorage.setItem('invoiceArray', JSON.stringify(invoiceArray));


    });

}
