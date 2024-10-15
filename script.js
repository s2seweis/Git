// Get modal elements
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');

// Event listener to open modal
openModalButton.addEventListener('click', function () {
    modal.style.display = 'flex';
});

// Event listener to close modal
closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Close modal if user clicks outside of modal content
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
