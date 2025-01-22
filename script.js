// script.js

// Data elemen kimia
const elements = [
    { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, atomicMass: 1.008 },
    { symbol: 'He', name: 'Helium', atomicNumber: 2, atomicMass: 4.0026 },
    { symbol: 'Li', name: 'Lithium', atomicNumber: 3, atomicMass: 6.94 },
    // Tambahkan elemen lain di sini
    { symbol: 'O', name: 'Oxygen', atomicNumber: 8, atomicMass: 15.999 },
    { symbol: 'Fe', name: 'Iron', atomicNumber: 26, atomicMass: 55.845 },
    // ... Tambahkan elemen lainnya sesuai tabel periodik
];

// Fungsi untuk menampilkan tabel periodic
function createPeriodicTable() {
    const tableContainer = document.getElementById('periodic-table');
    elements.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.className = 'element';
        elementDiv.innerHTML = `
            <strong>${element.symbol}</strong><br>
            ${element.name}<br>
            <small>Atomic #: ${element.atomicNumber}</small><br>
            <small>Mass: ${element.atomicMass}</small>
        `;

        // Menambahkan event klik
        elementDiv.addEventListener('click', () => {
            alert(`You clicked on ${element.name}`);
        });

        tableContainer.appendChild(elementDiv);
    });
}

// Jalankan fungsi untuk membuat tabel
createPeriodicTable();
