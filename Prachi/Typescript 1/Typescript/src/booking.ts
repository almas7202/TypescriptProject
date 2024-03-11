let Bookingdata: any
Bookingdata = (localStorage.getItem('data1'))
if (Bookingdata) {
    Bookingdata = JSON.parse(Bookingdata)
}
console.log(Bookingdata);

class BookingDetails {
    name: string;
    email: string;
    phone: number;
    trainername: string;
    trainerexpertise: string;
    slotdate: Date;
    bookingtimefrom: string;
    bookingtimeto: string;
    exercisebooking: string


    constructor(name: string, email: string, phone: number, trainername: string, trainerexpertise: string, slotdate: Date, bookingtimefrom: string, bookingtimeto: string, exercisebooking: string) {
        this.name = name,
            this.email = email,
            this.phone = phone,
            this.trainername = trainername,
            this.trainerexpertise = trainerexpertise,
            this.slotdate = slotdate,
            this.bookingtimefrom = bookingtimefrom,
            this.bookingtimeto = bookingtimeto,
            this.exercisebooking = exercisebooking
    }
}
let trainerName = document.getElementById("trainername") as HTMLInputElement
trainerName.value = Bookingdata.name;
console.log(trainerName.value);

let trainerExpertise = document.getElementById("trainerexpertise") as HTMLInputElement
trainerExpertise.value = Bookingdata.expertise;
console.log(trainerExpertise.value);


let submitbtn: any = document.getElementById("submit")
submitbtn.addEventListener("click", () => {

    let name = document.getElementById("name") as HTMLInputElement
    let email = document.getElementById("email") as HTMLInputElement
    let phoneNo = document.getElementById("phone") as HTMLInputElement


    let slotDate = document.getElementById("slotdate") as HTMLInputElement
    let bookingTimeFrom = document.getElementById("bookingtimefrom") as HTMLInputElement
    let bookingTimeTo = document.getElementById("bookingtimeto") as HTMLInputElement
    let exerciseBooking = document.getElementById("exercisebooking") as HTMLInputElement





    if (name?.value == "") {

        let nameError = document.getElementById("name-error") as HTMLCanvasElement
        nameError.innerHTML = "Please enter name";
        nameError.style.color = "red";

    }
    if (email?.value == "") {
        let emailError = document.getElementById("email-error") as HTMLCanvasElement
        emailError.innerHTML = "Please enter email";
        emailError.style.color = "red";
    }
    if (phoneNo?.value == "") {

        let phoneError = document.getElementById("phone-error") as HTMLCanvasElement
        phoneError.innerHTML = "Please enter phone number";
        phoneError.style.color = "red";

    }
    if (trainerName?.value == "") {
        let trainernameError = document.getElementById("trainername-error") as HTMLCanvasElement
        trainernameError.innerHTML = "Please enter trainer name";
        trainernameError.style.color = "red";
    }
    if (trainerExpertise?.value == "") {
        let trainerexpertiseError = document.getElementById("trainerexpertise-error") as HTMLCanvasElement
        trainerexpertiseError.innerHTML = "Please enter trainer name";
        trainerexpertiseError.style.color = "red";
    }
    if (slotDate?.value == "") {
        let slotdateError = document.getElementById("slotdate-error") as HTMLCanvasElement
        slotdateError.innerHTML = "Please enter trainer name";
        slotdateError.style.color = "red";
    }
    if (bookingTimeFrom?.value == "") {
        let bookingtimefromError = document.getElementById("bookingtimefrom-error") as HTMLCanvasElement
        bookingtimefromError.innerHTML = "Please enter trainer name";
        bookingtimefromError.style.color = "red";
    }
    if (bookingTimeTo?.value == "") {
        let bookingtimetoError = document.getElementById("bookingtimeto-error") as HTMLCanvasElement
        bookingtimetoError.innerHTML = "Please enter trainer name";
        bookingtimetoError.style.color = "red";
    }
    if (exerciseBooking?.value == "") {
        let exercisebookingError = document.getElementById("exercisebooking-error") as HTMLCanvasElement
        exercisebookingError.innerHTML = "Please enter trainer name";
        exercisebookingError.style.color = "red";
    }

    else {
        let bookingData = new BookingDetails(name?.value, email?.value, Number(phoneNo?.value), trainerName?.value, trainerExpertise?.value, slotDate?.value, bookingTimeFrom?.value, bookingTimeTo?.value, exerciseBooking?.value)
        let arr = [];
        if (localStorage.getItem('data2')) {
            arr = JSON.parse(localStorage.getItem('data2'));
            arr.push(bookingData);
            localStorage.setItem('data2', JSON.stringify(arr));
        }
        else {
            arr.push(bookingData);
            localStorage.setItem('data2', JSON.stringify(arr));
        }
        window.location.href = '../BookingDetails.html'
    }
})

