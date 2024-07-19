document.addEventListener('DOMContentLoaded', () => {
    const periodicTable = document.getElementById('periodic-table');
    const popup = document.getElementById('popup');
    const closePopup = document.querySelector('.close');
    const elementDetails = document.getElementById('element-details');

    const elements = [
        {symbol: 'H', name: 'Hydrogen', number: 1},
        {symbol: 'He', name: 'Helium', number: 2},
        {symbol: 'Li', name: 'Lithium', number: 3},
        {symbol: 'Be', name: 'Beryllium', number: 4},
        {symbol: 'B', name: 'Boron', number: 5},
        {symbol: 'C', name: 'Carbon', number: 6},
        {symbol: 'N', name: 'Nitrogen', number: 7},
        {symbol: 'O', name: 'Oxygen', number: 8},
        {symbol: 'F', name: 'Fluorine', number: 9},
        {symbol: 'Ne', name: 'Neon', number: 10},
        {symbol: 'Na', name: 'Sodium', number: 11},
        {symbol: 'Mg', name: 'Magnesium', number: 12},
        {symbol: 'Al', name: 'Aluminium', number: 13},
        {symbol: 'Si', name: 'Silicon', number: 14},
        {symbol: 'P', name: 'Phosphorus', number: 15},
        {symbol: 'S', name: 'Sulfur', number: 16},
        {symbol: 'Cl', name: 'Chlorine', number: 17},
        {symbol: 'Ar', name: 'Argon', number: 18},
        {symbol: 'K', name: 'Potassium', number: 19},
        {symbol: 'Ca', name: 'Calcium', number: 20},
    ];

    elements.forEach(element => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="top-section">
                ${element.symbol} - ${element.name}
            </div>
            <div class="bottom-section">
                <div>Atomic Number: ${element.number}</div>
            </div>
        `;
        card.addEventListener('click', () => showElementDetails(element.number));
        periodicTable.appendChild(card);
    });



 
});
