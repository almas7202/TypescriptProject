// Retrieve invoiceArray from local storage
const invoiceArrayString = localStorage.getItem('invoiceArray');
if (invoiceArrayString) {
    const invoiceArray = JSON.parse(invoiceArrayString);

    // Function to calculate total amount and quantity
    function calculateTotalAndQuantity() {
        let total = 0;
        let totalQty = 0;
        invoiceArray.forEach(item => {
            total += item.product_price * item.product_quantity;
            totalQty += item.product_quantity;
        });
        return { total, totalQty };
    }

    // Create elements for each item in the invoiceArray
    const container = document.querySelector('.card-body .container');
    if (container) {
        const ul = document.createElement('ul');
        ul.classList.add('list-unstyled');
        container.appendChild(ul);

        // Append customer name, invoice number, and date
        const liName = document.createElement('li');
        liName.textContent = 'John Doe';
        ul.appendChild(liName);

        const liInvoice = document.createElement('li');
        liInvoice.innerHTML = '<span class="text-black">Invoice</span> #12345';
        ul.appendChild(liInvoice);

        const liDate = document.createElement('li');
        let date:any = new Date()
        liDate.textContent = date
        ul.appendChild(liDate);

        // Append items with quantity
        invoiceArray.forEach(item => {
            const row = document.createElement('div');
            row.classList.add('row');
            container.appendChild(row);

            const colItem = document.createElement('div');
            colItem.classList.add('col-xl-6');
            colItem.innerHTML = `<p>${item.product_name}</p>`;
            row.appendChild(colItem);

            const colQty = document.createElement('div');
            colQty.classList.add('col-xl-2');
            colQty.innerHTML = `<p class="float-start">${item.product_quantity}</p>`;
            row.appendChild(colQty);

            const colPrice = document.createElement('div');
            colPrice.classList.add('col-xl-4');
            colPrice.innerHTML = `<p class="float-end">$${(item.product_price * item.product_quantity).toFixed(2)}</p>`;
            row.appendChild(colPrice);

            const hr = document.createElement('hr');
            container.appendChild(hr);
        });

        // Append total amount and total quantity
        const { total, totalQty } = calculateTotalAndQuantity();
        const totalRow = document.createElement('div');
        totalRow.classList.add('row', 'text-black');
        container.appendChild(totalRow);

        const colTotal = document.createElement('div');
        colTotal.classList.add('col-xl-12');
        colTotal.innerHTML = `<p class="float-end fw-bold">Total Quantity: ${totalQty}, Grand Total: $${total.toFixed(2)}</p>`;
        totalRow.appendChild(colTotal);

        const hrTotal = document.createElement('hr');
        hrTotal.style.border = '2px solid black';
        container.appendChild(hrTotal);
    }
} else {
    console.log('No invoice data found in local storage.');
}

// Retrieve invoiceArray from local storage
const storedInvoiceArray = localStorage.getItem('invoiceArray');
if (storedInvoiceArray) {
    const invoiceArray = JSON.parse(storedInvoiceArray);
    const tableBody = document.getElementById('invoiceTableBody');

    if (tableBody) {
        invoiceArray.forEach((item, index) => {
            const row = document.createElement('tr');

            const invoiceNumberCell = document.createElement('td');
            invoiceNumberCell.textContent = (index + 1).toString(); // Assuming invoice numbers start from 1
            row.appendChild(invoiceNumberCell);

            const invoiceAmountCell = document.createElement('td');
            const totalAmount = item.product_price * item.product_quantity; // Calculate total amount
            invoiceAmountCell.textContent = `$${totalAmount.toFixed(2)}`; // Assuming the total amount is calculated properly
            row.appendChild(invoiceAmountCell);

            tableBody.appendChild(row);
        });
    }
} else {
    console.log('No invoice data found in local storage.');
}


