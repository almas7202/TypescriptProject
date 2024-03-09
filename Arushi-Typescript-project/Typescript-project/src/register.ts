interface UserDetails {
    ID: any;
    Name: string;
    Username: string;
    Password: string;
    Email: string;
    Phone: any;
    Adharcard: any;
    PanCard: string;
    Address: string;
    Age: any;
    Gender : any;
    AcNum : any;
}

function REgValidate() {
    let Name = document.getElementById('name') as HTMLInputElement
    let username = document.getElementById('username') as HTMLInputElement
    let password = document.getElementById('password') as HTMLInputElement
    let Email = document.getElementById("email") as HTMLInputElement
    let Phone = document.getElementById("phone") as HTMLInputElement
    let Adhar = document.getElementById("Adhar") as HTMLInputElement
    let Pan = document.getElementById("Pan") as HTMLInputElement
    let Address = document.getElementById("address") as HTMLInputElement
    let Age = document.getElementById("age") as HTMLInputElement
    let gender: any = document.forms["register-form"]["gender"] as HTMLInputElement
    
    
    if (Name?.value == "") {
        let error = document.getElementById("name-Err") as HTMLCanvasElement;
        error.innerHTML = "<b><i>This feild is required.</i></b>"
        error.style.color = "red"
    }
    if (username?.value == "") {
        let error = document.getElementById("username-Err") as HTMLCanvasElement;
        error.innerHTML = "<b><i>This feild is required.</i></b>"
        error.style.color = "red"
    }
    if (password?.value == "") {
        let error = document.getElementById("password-Err") as HTMLCanvasElement;
        error.innerHTML = "<b><i>This feild is required.</i></b>"
        error.style.color = "red"
    }
    if (Email?.value == "") {
        let error = document.getElementById("email-Err") as HTMLCanvasElement;
        error.innerHTML = "<b><i>This feild is required.</i></b>"
        error.style.color = "red"
    }
    if (Phone?.value == "") {
        let error = document.getElementById("phone-Err") as HTMLCanvasElement;
        error.innerHTML = "<b><i>This feild is required.</i></b>"
        error.style.color = "red"
    }
    if (Adhar?.value == "") {
        let error = document.getElementById("Adhar-Err") as HTMLCanvasElement;
        error.innerHTML = "<b><i>This feild is required.</i></b>"
        error.style.color = "red"
    }
    if (Pan?.value == "") {
        let error = document.getElementById("PAN-Err") as HTMLCanvasElement;
        error.innerHTML = "<b><i>This feild is required.</i></b>"
        error.style.color = "red"
    }
    if (Address?.value == "") {
        let error = document.getElementById("address-Err") as HTMLCanvasElement;
        error.innerHTML = "<b><i>This feild is required.</i></b>"
        error.style.color = "red"
    }
    if (Age?.value == "") {
        let error = document.getElementById("age-Err") as HTMLCanvasElement;
        error.innerHTML = "<b><i>This feild is required.</i></b>"
        error.style.color = "red"
    }
    else if (parseInt(Age?.value) <= 18) {
        let error = document.getElementById("age-Err") as HTMLCanvasElement;
        error.innerHTML = "Age must be above 18"
        error.style.color = "red"
    }
    else {
        let id = Math.floor((Math.random() * 100000));
        let acnumber = Math.floor((Math.random() * 10000000000000));
        let user: UserDetails
        user = { ID: id, Name: Name?.value, Username: username?.value, Password: password?.value, Email: Email?.value, Phone: Phone?.value, Adharcard: Adhar?.value, PanCard: Pan?.value, Address: Address?.value, Age: Age?.value, Gender: gender?.value, AcNum: acnumber}
        let Details = []
        if (localStorage.getItem('user-data')) {
            Details = JSON.parse(localStorage.getItem('user-data'));
            Details.push(user);
              localStorage.setItem('user-data', JSON.stringify(Details));
      
          }
          else {
            Details.push(user);
              localStorage.setItem('user-data', JSON.stringify(Details));
          }
      
        Details.push(user)
        console.log(Details);
        window.location.href = "./login.html"
    }

}


