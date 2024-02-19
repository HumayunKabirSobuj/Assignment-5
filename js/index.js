function buyTicket() {

    const phSection = document.getElementById('ph');
    phSection.scrollIntoView({ behavior: 'smooth' });

}

let selectedSeat = 0;
let seatLeft = 8;
const maxSeat = 4;
const perTicketPrice = 550;
const seats = document.getElementsByClassName('seat');
const clickSeat = document.getElementById('selected-seat')
const leftSeat = document.getElementById('left-seats');

for (const seat of seats) {
    seat.addEventListener('click', function () {
        const seatValue = seat.innerText;
        const titleContainer = document.getElementById('title-container');
        // console.log(seatValue);

        const p = document.createElement('p');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        p.innerText = seatValue;
        h1.innerText = "Economoy"
        h2.innerText = 550;
        price = clickSeat.innerText * perTicketPrice + 550; 
        price2=price-perTicketPrice;
        if (selectedSeat < maxSeat || seat.classList.contains('bg-[#1DD100]')) {
            if (!seat.classList.contains('bg-[#1DD100]')) {
                seat.classList.add('bg-[#1DD100]');
                selectedSeat++;
                titleContainer.appendChild(p);
                titleContainer.appendChild(h1);
                titleContainer.appendChild(h2);
                document.getElementById('total-price').innerText = price.toFixed(2);

            }
            else {

                seat.classList.remove('bg-[#1DD100]');
                

                titleContainer.innerHTML = '';

                clickSeat.innerText = selectedSeat;
                document.getElementById('total-price').innerText =price-550;
                selectedSeat--;


            }
            clickSeat.innerText = selectedSeat;
            leftSeat.innerText = seatLeft - selectedSeat;
        }


    });
};





