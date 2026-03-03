function updatePagination() {
    pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`;

    if (currentPage === 1) {
        prevButton.parentElement.classList.add('disabled');
    } else {
        prevButton.parentElement.classList.remove('disabled');
    }

    if (currentPage === totalPages) {
        nextButton.parentElement.classList.add('disabled');
    } else {
        nextButton.parentElement.classList.remove('disabled');
    }
}

// Event Listeners for pagination buttons
prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 1) {
        currentPage--;
        LoadTableArea(currentPage);
        updatePagination();
    }
});

nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
        currentPage++;
        LoadTableArea(currentPage);
        updatePagination();
    }
});

// Action Handlers
function OnOff_Fn(id) { alert("On/Off on ID: " + id); }
function Delete_Fn(id) { alert("Delete on ID: " + id); }
function Edit_Fn(id) { alert("Edit on ID: " + id); }