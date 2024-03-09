interface Withdraw {
    withdraw: any;
    totalbalance: any;
}

let Userdata = JSON.parse(localStorage.getItem("user-data"))
console.log(Userdata);
let Loginvalues = JSON.parse(localStorage.getItem("login"))
console.log(Loginvalues);
let depositvalue = JSON.parse(localStorage.getItem('depositbal'))
console.log(depositvalue);

let logofbtn = document.getElementById("logout") as HTMLCanvasElement
logofbtn.addEventListener("click", (event)=>{
    event.preventDefault()
    console.log();
    let link = window.location.href.split("/")
    window.location.href = link[0]+"/"+link[1]+"/"+link[2]
    
})

let c, d;
for (c of Loginvalues) {
    // console.log(i["username"]);
    for (d of Userdata) {
        if (c["username"] == d["Username"]) {
            let id = document.getElementById("ID") as HTMLCanvasElement
            id.innerHTML = d["ID"]

            let Name = document.getElementById("Name") as HTMLCanvasElement
            Name.innerHTML = d["Name"]

            let Ac = document.getElementById("Account") as HTMLCanvasElement
            Ac.innerHTML = d["AcNum"]

            let Mobile = document.getElementById("Mobile") as HTMLCanvasElement
            Mobile.innerHTML = d["Phone"]

            for(let i of depositvalue){
                let balance = document.getElementById("balance") as HTMLCanvasElement
                balance.innerHTML = i["totalbalance"]
            }

        }
    }

}
// let AccountBalance: number = 0;
// let depo = document.getElementById("depAmt")
// depo?.addEventListener("click", (event) => {
//     event.preventDefault()
//     let amount = document.getElementById("depositAmount") as HTMLInputElement

//     if (amount?.value == "") {
//         let error = document.getElementById("deposit-Err") as HTMLCanvasElement;
//         error.innerHTML = "<b><i>Enter a value to deposit</i></b>"
//         error.style.color = "red"
//     }
//     else {
//         AccountBalance = AccountBalance + parseInt(amount?.value)
//         let amt: Deposit
//         amt = { deposit: amount?.value, totalbalance: AccountBalance }
//         let depositamt =[]
//         if (localStorage.getItem('depositbal')) {
//             depositamt = JSON.parse(localStorage.getItem('depositbal'));
//             depositamt.push(amt);
//               localStorage.setItem('depositbal', JSON.stringify(depositamt));
      
//           }
//           else {
//             depositamt.push(amt);
//               localStorage.setItem('depositbal', JSON.stringify(depositamt));
//           }
//         //   console.log(AccountBalance);
//         console.log(amt);
//     }
// })

