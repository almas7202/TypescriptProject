class LoginTrainer {
    Name: string;
    Age: number;
    Experience: string;
    Expertise: string;
    FreeSlot: string

    constructor(name: string, age: number, experience: string, expertise: string, freeslot: string) {
        this.Name = name,
            this.Age = age,
            this.Experience = experience,
            this.Expertise = expertise,
            this.FreeSlot = freeslot
    }
}

const buttonlogout = document.getElementById("buttonlogout") as HTMLInputElement
buttonlogout.addEventListener("click", () => {
    window.location.href = "/index.html";
})


let array = [{
    "Name": "Arun",
    "Age": 24,
    "Experience": "2 years",
    "Expertise": "Leg Exercise",
    "Free Slot": "Monday 2 pm",
},
{
    "Name": "Rahul",
    "Age": 22,
    "Experience": "1.5 years",
    "Expertise": "Chest Exercise",
    "Free Slot": "Sunday 10 am",
},
{
    "Name": "Pankaj",
    "Age": 26,
    "Experience": "2.5 years",
    "Expertise": "Weight Gain Exercise",
    "Free Slot": "Sunday 2 pm",
},
{
    "Name": "Jaimin",
    "Age": 24,
    "Experience": "2 years",
    "Expertise": "Squat",
    "Free Slot": "Monday 2 pm",
},
{
    "Name": "Prakash",
    "Age": 22,
    "Experience": "1.5 years",
    "Expertise": "Lungs Exercise",
    "Free Slot": "Sunday 10 am",
},
{
    "Name": "Sahil",
    "Age": 26,
    "Experience": "2.5 years",
    "Expertise": "Weight loss Exercise",
    "Free Slot": "Sunday 2 pm",
}]


for (var i in array) {

    let div = document.getElementById("card2") as HTMLElement

    let card = document.createElement("div")
    card.className = 'card mb-2 col-sm-3 list';

    let name = document.createElement("p")
    name.innerHTML = array[i].Name
    card.appendChild(name)

    let age = document.createElement("p")
    age.innerHTML = String(array[i].Age)
    card.appendChild(age)

    let experience = document.createElement("p")
    experience.innerHTML = array[i].Experience
    card.appendChild(experience)

    let expertise = document.createElement("p")
    expertise.innerHTML = array[i].Expertise
    card.appendChild(expertise)

    let freeslot = document.createElement("p")
    freeslot.innerHTML = array[i]["Free Slot"]
    card.appendChild(freeslot)

    let button = document.createElement("button")
    button.className = 'btn btn-outline-secondary'
    button.innerHTML = "Book Slot"
    button.onclick = () => { }
    card.appendChild(button)

    button.onclick = () => {
        window.location.href = "/Booking.html"
    }

    div.appendChild(card)

    let trainer = new LoginTrainer(array[i].Name, array[i].Age, array[i].Experience, array[i].Expertise, array[i]["Free Slot"])
    let arr = [];
    if (localStorage.getItem('data1')) {
        arr = JSON.parse(localStorage.getItem('data1'));
        arr.push(trainer);
        localStorage.setItem('data1', JSON.stringify(arr));
    }
    else {
        arr.push(trainer);
        localStorage.setItem('data1', JSON.stringify(arr));
    }
}





