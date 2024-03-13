import {user} from './user'
import {Register} from './user'

document.addEventListener('DOMContentLoaded',()=>{
    let user_name = localStorage.getItem('login_maintaine')
    console.log(user_name);
    if(user_name){
        user_login()
    }else{
        alert("Please Login First")
    }
})
let user: user[] = []

let last_user_id: number = 0

//btnRegister
document.getElementById('btnRegister')?.addEventListener('click', () => {
    let username = (<HTMLInputElement>document.getElementById('username')).value
    let email = (<HTMLInputElement>document.getElementById('email')).value
    let password = (<HTMLInputElement>document.getElementById('password')).value

    if (username == "") {
        const usernamevalid: any = document.getElementById('validuser')
        usernamevalid.innerHTML = 'please Enter Username'
    } else {
        const usernamevalid: any = document.getElementById('validuser')
        usernamevalid.innerHTML = ''
    }

    if (email == "") {
        const emailvalid: any = document.getElementById('validemail')
        emailvalid.innerHTML = 'please Enter Email'
    } else {
        const emailvalid: any = document.getElementById('validemail')
        emailvalid.innerHTML = ''
    }


    if (password == "") {
        const passwordvalid: any = document.getElementById('validpassword')
        passwordvalid.innerHTML = 'please Enter Password'
    } else {
        const passwordvalid: any = document.getElementById('validpassword')
        passwordvalid.innerHTML = ''
    }
    console.log(username);
    console.log(email);
    console.log(password);

    if (username, email, password) {
        // // last_user_id++
        const new_user = new Register(last_user_id, username, email, password)
        new_user.adduser(username,email,password)
        // console.log(new_user);
        // user.push(new_user)
        // localStorage.setItem('userlogin', JSON.stringify(user))

        
    }

})

// btnlogin
document.getElementById('btnlogin')?.addEventListener('click', () => {
    let loginuser = (<HTMLInputElement>document.getElementById('loginuser')).value
    let loginpassword = (<HTMLInputElement>document.getElementById('loginpassword')).value

    if (loginuser == "") {
        const loginuservalid: any = document.getElementById("validuserlogin")
        loginuservalid.innerHTML = "Please Enter Username"
    } else {
        const loginuservalid: any = document.getElementById("validuserlogin")
        loginuservalid.innerHTML = " "
    }
    if (loginpassword == "") {
        const loginuserpass: any = document.getElementById("validuserpassword")
        loginuserpass.innerHTML = "Please Enter Password"
    } else {
        const loginuserpass: any = document.getElementById("validuserpassword")
        loginuserpass.innerHTML = ""
    }
    if (loginuser, loginpassword) {
        const new_user = new Register()
        new_user.loginuser(loginuser,loginpassword)
    }
})

// btnlogout
document.getElementById('btnlogout')?.addEventListener('click', () => {
    const logout = new Register()
    logout.logout()
})



export function user_login() {
    const invoiceArrayString = localStorage.getItem('invoiceArray');
    if (invoiceArrayString) {
        const invoiceArray = JSON.parse(invoiceArrayString);

        // Function to calculate total amount and quantity
        function calculateTotalAndQuantity() {
            let total = 0;
            let totalQty = 0;
            invoiceArray.forEach((item: { product_price: number; product_quantity: number; }) => {
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
            let date: any = new Date()
            liDate.textContent = date
            ul.appendChild(liDate);

            // Append items with quantity
            invoiceArray.forEach((item: { product_name: any; product_quantity: number; product_price: number; }) => {
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
            const { total } = calculateTotalAndQuantity();
            const totalRow = document.createElement('div');
            totalRow.classList.add('row', 'text-black');
            container.appendChild(totalRow);

            const colTotal = document.createElement('div');
            colTotal.classList.add('col-xl-12');
            colTotal.innerHTML = `<p class="float-end fw-bold">Grand Total: $${total.toFixed(2)}</p>`;
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
            invoiceArray.forEach((item: { product_price: number; product_quantity: number; }, index: number) => {
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
}