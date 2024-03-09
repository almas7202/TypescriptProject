
let Bookingdata: any
Bookingdata = (localStorage.getItem('data'))
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
    bookingtime: string;
    exercisebooking: string


    constructor(name: string, email: string, phone: number, trainername: string, trainerexpertise: string, slotdate: Date, bookingtime: string, exercisebooking: string) {
        this.name = name,
            this.email = email,
            this.phone = phone,
            this.trainername = trainername,
            this.trainerexpertise = trainerexpertise,
            this.slotdate = slotdate,
            this.bookingtime = bookingtime,
            this.exercisebooking = exercisebooking
    }
}

let submitbtn: any = document.getElementById("submit")
submitbtn.addEventListener("click", () => {

    let name = document.getElementById("name") as HTMLInputElement
    let email = document.getElementById("email") as HTMLInputElement
    let phoneNo = document.getElementById("phone") as HTMLInputElement
    let trainerName = document.getElementById("trainername") as HTMLInputElement
    let trainerExpertise = document.getElementById("trainerexpertise") as HTMLInputElement
    let slotDate = document.getElementById("slotdate") as HTMLInputElement
    let bookingTimeFrom = document.getElementById("bookingtimefrom") as HTMLInputElement
    let bookingTimeTo = document.getElementById("bookingtimeto") as HTMLInputElement
    let exerciseBooking = document.getElementById("exercisebooking") as HTMLInputElement


    if (name?.value == "") {

        let nameError = document.getElementById("name-error") as HTMLCanvasElement
        nameError.innerHTML = "Please enter name";

    }
    if (email?.value == "") {
        let emailError = document.getElementById("email-error") as HTMLCanvasElement
        emailError.innerHTML = "Please enter email";
    }
    if (phoneNo?.value == "") {

        let phoneError = document.getElementById("email-error") as HTMLCanvasElement
        phoneError.innerHTML = "Please enter phone number";

    }
    if (trainerName?.value == "") {
        let trainernameError = document.getElementById("password-error") as HTMLCanvasElement
        trainernameError.innerHTML = "Please enter trainer name";
    }
    if (trainerExpertise?.value == "") {
        let trainerexpertiseError = document.getElementById("password-error") as HTMLCanvasElement
        trainerexpertiseError.innerHTML = "Please enter trainer name";
    }
    if (slotDate?.value == "") {
        let slotdateError = document.getElementById("password-error") as HTMLCanvasElement
        slotdateError.innerHTML = "Please enter trainer name";
    }
    if (bookingTimeFrom?.value == "") {
        let bookingtimefromError = document.getElementById("password-error") as HTMLCanvasElement
        bookingtimefromError.innerHTML = "Please enter trainer name";
    }
    if (bookingTimeTo?.value == "") {
        let bookingtimetoError = document.getElementById("password-error") as HTMLCanvasElement
        bookingtimetoError.innerHTML = "Please enter trainer name";
    }
    if (exerciseBooking?.value == "") {
        let exercisebookingError = document.getElementById("password-error") as HTMLCanvasElement
        exercisebookingError.innerHTML = "Please enter trainer name";
    }


})