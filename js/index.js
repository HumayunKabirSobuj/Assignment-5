function buyTicket() {

    const phSection = document.getElementById('ph');
    phSection.scrollIntoView({ behavior: 'smooth' });

}

let selectedSeat = 0;
let seatLeft = 8;
const maxSeat=4;
const seats = document.getElementsByClassName('seat');
const clickSeat = document.getElementById('selected-seat')
const leftSeat = document.getElementById('left-seats');
for (const seat of seats) {
    seat.addEventListener('click', function () {
        if(selectedSeat<maxSeat || seat.classList.contains('bg-[#1DD100]')){
            if (!seat.classList.contains('bg-[#1DD100]')) {
                seat.classList.add('bg-[#1DD100]');
                selectedSeat++;
            }
            else {
                seat.classList.remove('bg-[#1DD100]');
                selectedSeat--;
            }
            clickSeat.innerText=selectedSeat;
            leftSeat.innerText=seatLeft-selectedSeat;
        }
        

    });
};


