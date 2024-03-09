interface Deposit {
    account: any;
    deposit: any;
    totalbalance: any;
}

let userdata = JSON.parse(localStorage.getItem("user-data"))
console.log(userdata);
let loginvalues = JSON.parse(localStorage.getItem("login"))
console.log(loginvalues);

let logbtn = document.getElementById("logout") as HTMLCanvasElement
logbtn.addEventListener("click", (event)=>{
    event.preventDefault()
    console.log();
    let link = window.location.href.split("/")
    window.location.href = link[0]+"/"+link[1]+"/"+link[2]
    
})

let a, b;
for (a of loginvalues) {
    // console.log(i["username"]);
    for (b of userdata) {
        if (a["username"] == b["Username"]) {
            let id = document.getElementById("ID") as HTMLCanvasElement
            id.innerHTML = b["ID"]

            let Name = document.getElementById("Name") as HTMLCanvasElement
            Name.innerHTML = b["Name"]

            let Ac = document.getElementById("Account") as HTMLCanvasElement
            Ac.innerHTML = b["AcNum"]

            let Mobile = document.getElementById("Mobile") as HTMLCanvasElement
            Mobile.innerHTML = b["Phone"]

        }
    }

}
let AccountBalance: number = 0;
let depo = document.getElementById("depAmt")
depo?.addEventListener("click", (event) => {
    event.preventDefault()
    let amount = document.getElementById("depositAmount") as HTMLInputElement

    if (amount?.value == "") {
        let error = document.getElementById("deposit-Err") as HTMLCanvasElement;
        error.innerHTML = "<b><i>Enter a value to deposit</i></b>"
        error.style.color = "red"
    }
    else {
        AccountBalance = AccountBalance + parseInt(amount?.value)
        for(i of userdata){
            let amt: Deposit
            amt = {account: i['AcNum'], deposit: amount?.value, totalbalance: AccountBalance }
            let depositamt =[]
            if (localStorage.getItem('depositbal')) {
                depositamt = JSON.parse(localStorage.getItem('depositbal'));
                depositamt.push(amt);
                  localStorage.setItem('depositbal', JSON.stringify(depositamt));
          
              }
              else {
                depositamt.push(amt);
                  localStorage.setItem('depositbal', JSON.stringify(depositamt));
              }
            //   console.log(AccountBalance);
            console.log(amt);
        }
        }
        
})

