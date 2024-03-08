// Load product_list from local storage
let product_list: product[] = JSON.parse(localStorage.getItem('product_list') || '[]');
console.log(product_list);


// Define product interface
interface product {
    product_id: number;
    product_name: string;
    product_img: string;
    product_price: number;
    product_qty: number;
    product_category: string;
}

// Function to generate cards dynamically
function generateCards(): void {
    const cardContainer = document.getElementById('card-container');
    console.log(cardContainer);
    
    if (!cardContainer) return;

    cardContainer.innerHTML = ''; // Clear previous cards

    product_list.forEach(product => {
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
        text.textContent = `Price: ${product.product_price}, Avilable Quantity: ${product.product_qty}`;
        cardBodyDiv.appendChild(text);

        // Create add to invoice button
        const addToInvoiceBtn = document.createElement('a');
        addToInvoiceBtn.classList.add('btn', 'btn-primary');
        addToInvoiceBtn.href = '#';
        addToInvoiceBtn.textContent = 'Add To Invoice';
        cardBodyDiv.appendChild(addToInvoiceBtn);

        // Append card body to card container
        cardDiv.appendChild(cardBodyDiv);

        // Append card container to card container element
        cardContainer.appendChild(cardDiv);
    });
}

// Call the function to generate cards
generateCards();
