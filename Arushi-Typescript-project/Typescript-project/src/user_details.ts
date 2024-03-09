let data = JSON.parse(localStorage.getItem("user-data")) 
    console.log(data);
let logindetails = JSON.parse(localStorage.getItem("login"))
    console.log(logindetails);
    

let btn = document.getElementById("logout") as HTMLCanvasElement
btn.addEventListener("click", (event)=>{
    event.preventDefault()
    console.log();
    let link = window.location.href.split("/")
    window.location.href = link[0]+"/"+link[1]+"/"+link[2]
    
})

let i,j;
for( i of logindetails){
    // console.log(i["username"]);
    for(j of data){
        if(i["username"] == j["Username"]){
            let id = document.getElementById("ID") as HTMLCanvasElement
            id.innerHTML = j["ID"]

            let Ac = document.getElementById("Account") as HTMLCanvasElement
            Ac.innerHTML = j["AcNum"]

            let Name = document.getElementById("Name") as HTMLCanvasElement
            Name.innerHTML = j["Name"]

            let Mobile = document.getElementById("Mobile") as HTMLCanvasElement
            Mobile.innerHTML = j["Phone"]

            let Email = document.getElementById("Email") as HTMLCanvasElement
            Email.innerHTML = j["Email"]

            let Adhar = document.getElementById("Adhar") as HTMLCanvasElement
            Adhar.innerHTML = j["Adharcard"]

            let PAN = document.getElementById("PAN") as HTMLCanvasElement
            PAN.innerHTML = j["PanCard"]
        }
    }

}

let deposit = document.getElementById('deposit')
deposit?.addEventListener("click", (event)=>{
    event.preventDefault()
    window.location.href='./deposit.html'
    
})
let withdraw = document.getElementById('withdraw')
withdraw?.addEventListener("click", (event)=>{
    event.preventDefault()
    window.location.href='./withdraw.html'
    
})
let account= document.getElementById('account')
account?.addEventListener("click", (event)=>{
    event.preventDefault()
    window.location.href='./deposit.html'
    
})
let fixed = document.getElementById('fixed')
fixed?.addEventListener("click", (event)=>{
    event.preventDefault()
    window.location.href='./deposit.html'
    
})