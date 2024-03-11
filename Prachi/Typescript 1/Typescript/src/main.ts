class Trainer {
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

const button: any = document.getElementById("button");
button.addEventListener("click", () => {
    window.location.href = "/login.html";
})


let arr = [{
    "Name": "Arun",
    "Age": 24,
    "Experience": "2 years",
    "Expertise": "Leg Exercise",
    "Free Slot": "Monday 2pm",
},
{
    "Name": "Rahul",
    "Age": 22,
    "Experience": "1.5 years",
    "Expertise": "Chest Exercise",
    "Free Slot": "Sunday 10am",
},
{
    "Name": "Pankaj",
    "Age": 26,
    "Experience": "2.5 years",
    "Expertise": "Weight Gain Exercise",
    "Free Slot": "Sunday 2pm",
},
{
    "Name": "Jaimin",
    "Age": 24,
    "Experience": "2 years",
    "Expertise": "Squat",
    "Free Slot": "Monday 2pm",
},
{
    "Name": "Prakash",
    "Age": 22,
    "Experience": "1.5 years",
    "Expertise": "Lungs Exercise",
    "Free Slot": "Sunday 10am",
},
{
    "Name": "Sahil",
    "Age": 26,
    "Experience": "2.5 years",
    "Expertise": "Weight loss Exercise",
    "Free Slot": "Sunday 2pm",
}]


for (var i in arr) {
    let div = document.getElementById("card2") as HTMLElement

    let card = document.createElement("div")
    card.className = 'card mb-2 col-sm-3 list';

    let name = document.createElement("p")
    name.innerHTML = arr[i].Name
    card.appendChild(name)

    let age = document.createElement("p")
    age.innerHTML = String(arr[i].Age)
    card.appendChild(age)

    let experience = document.createElement("p")
    experience.innerHTML = arr[i].Experience
    card.appendChild(experience)

    let expertise = document.createElement("p")
    expertise.innerHTML = arr[i].Expertise
    card.appendChild(expertise)

    let freeslot = document.createElement("p")
    freeslot.innerHTML = arr[i]["Free Slot"]
    card.appendChild(freeslot)

    let button = document.createElement("button")
    button.className = 'btn btn-outline-secondary'
    button.innerHTML = "Book Slot"
    card.appendChild(button)

    button.onclick = () => {
        window.location.href = "/login.html"
    }
    div.appendChild(card)
}









