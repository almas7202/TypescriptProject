function displayDetails() {
    let detailsdisplay: any = document.getElementById('displaytable')
    detailsdisplay.innerHTML = `<tr><th>ID</th><th>Name</th><th>Trainer Name</th><th>Exercise</th><th>Slot Date</th><th>From</th><th>To</th><th colspan='2'>Action</th>`

    let Bookingdetaildata: any
    Bookingdetaildata = (localStorage.getItem('data2'))
    if (Bookingdetaildata) {
        Bookingdetaildata = JSON.parse(Bookingdetaildata)
    }
    console.log(Bookingdetaildata);

    Bookingdetaildata.forEach((booking: {
        name: any; trainername: any; exercisebooking: any; slotdate: any; bookingtimefrom: any; bookingtimeto: any
    }) => {
        let row: any = detailsdisplay.insertRow();
        row.setAttribute("id", "row")
        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)
        let cell3 = row.insertCell(2)
        let cell4 = row.insertCell(3)
        let cell5 = row.insertCell(4)
        let cell6 = row.insertCell(5)
        let cell7 = row.insertCell(6)
        let cell8 = row.insertCell(7)
        let cell9 = row.insertCell(8)

        cell1.innerHTML = generate()
        cell2.innerHTML = booking.name;
        cell3.innerHTML = booking.trainername;
        cell4.innerHTML = booking.exercisebooking;
        cell5.innerHTML = booking.slotdate;
        cell6.innerHTML = booking.bookingtimefrom;
        cell7.innerHTML = booking.bookingtimeto;

        let editbutton = document.createElement('input')
        editbutton.setAttribute("id", "edit" + generate())
        editbutton.setAttribute("class", "btn btn-primary")
        // editbutton.setAttribute("type", "button")
        editbutton.setAttribute("value", "edit")
        cell8.appendChild(editbutton)

        let cancelbutton = document.createElement('input')
        cancelbutton.setAttribute("id", "cancel" + generate())
        cancelbutton.setAttribute("class", "btn btn-danger")
        // cancelbutton.setAttribute("type", "button")
        cancelbutton.setAttribute("value", "cancel")
        cancelbutton.onclick = () => {
            alert("Want to delete this Slot");

            row.innerHTML = "";

            let bookings = JSON.parse(localStorage.getItem('data2'))


            let arr = []

            for (let i = 0; i < bookings.length; i++) {
                arr.push(bookings[i]);
                for (let j = i; j < arr.length; j++) {
                    arr.splice(j, 1)
                }

            }

            localStorage.setItem('data2', JSON.stringify(arr))

        }
        cell9.appendChild(cancelbutton)

    })
}
function generate() {
    let numberLength = 4;
    let charset = '0123456789';
    let number = '';
    for (let i = 0; i < numberLength; i++) {
        number += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return number;
}


displayDetails()