function buyTicket() {

    const phSection = document.getElementById('ph');
    phSection.scrollIntoView({ behavior: 'smooth' });

}

let selectedSeat = 1;
let seatLeft = 7;
const seats = document.getElementsByClassName('seat');
for (const seat of seats) {
    seat.addEventListener('click', function () {
        seat.classList.add('bg-[#1DD100]');
        const clickSeat = document.getElementById('selected-seat')
        const leftSeat = document.getElementById('left-seats');
        console.log(clickSeat.innerText);
        clickSeat.innerText = selectedSeat;
        leftSeat.innerText = seatLeft;
        selectedSeat++;
        seatLeft--;
        

    });
}
