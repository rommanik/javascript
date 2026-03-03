const pagination = document.getElementById('Pagination');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const pageNumbers = document.getElementById('page-numbers');

// Initialize class
const MyStudent = new Student();

// Configuration
const itemPerPage = 10;
let currentPage = 1;

// Initial Load
LoadTableArea(currentPage);
updatePaginationUI();

function LoadTableArea(page) {
    const allStudents = MyStudent.StudentList();
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const filteredArray = allStudents.slice(startIndex, endIndex);

    const myTableBody = document.querySelector('#myTable tbody');
    myTableBody.innerHTML = ''; 

    // Counter starts at the correct number for the page (e.g., Page 2 starts at 11)
    let rowNumber = startIndex;

    filteredArray.forEach((item) => {
        rowNumber++;
        const row = document.createElement('tr');
        
        // Exact HTML structure to match your screenshot
        row.innerHTML = `
            <td class="text-center">${rowNumber}</td>
            <td class="text-center">${item.student_code}</td>
            <td>
                <div class='d-flex justify-content-between'>
                    <div>${item.last_name} ${item.first_name}</div>
                    <div>[${item.gender}]</div>
                </div>
            </td>
            <td class="text-center">${moment(item.created_date).format("MM-DD-YY")}</td>
            <td class="text-center">
                <button type='button' class='btn btn-success btn-xs' onclick='OnOff_Fn("${item.id}")'>On/Off</button>
            </td>
            <td class="text-center">
                <button type='button' class='btn btn-danger btn-xs' onclick='Delete_Fn("${item.id}")'>Delete</button>
            </td>
            <td class="text-center">
                <button type='button' class='btn btn-success btn-xs' onclick='Edit_Fn("${item.id}")'>Edit</button>
            </td>
        `;
        myTableBody.appendChild(row);
    });
}

function updatePaginationUI() {
    const allStudents = MyStudent.StudentList();
    const totalPages = Math.ceil(allStudents.length / itemPerPage);
    
    // Update "Page X of Y" text
    pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`;

    // Previous Button styling
    if (currentPage === 1) {
        prevButton.classList.add('disabled');
        prevButton.style.color = "#999";
        prevButton.style.cursor = "not-allowed";
    } else {
        prevButton.classList.remove('disabled');
        prevButton.style.color = "#007bff";
        prevButton.style.cursor = "pointer";
    }

    // Next Button styling
    if (currentPage >= totalPages) {
        nextButton.classList.add('disabled');
        nextButton.style.color = "#999";
        nextButton.style.cursor = "not-allowed";
    } else {
        nextButton.classList.remove('disabled');
        nextButton.style.color = "#007bff";
        nextButton.style.cursor = "pointer";
    }
}

// Event Listeners for Pagination
prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 1) {
        currentPage--;
        LoadTableArea(currentPage);
        updatePaginationUI();
    }
});

nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    const totalPages = Math.ceil(MyStudent.StudentList().length / itemPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        LoadTableArea(currentPage);
        updatePaginationUI();
    }
});

// Mock Action Functions
function OnOff_Fn(id) { console.log("Toggle ID:", id); }
function Delete_Fn(id) { console.log("Delete ID:", id); }
function Edit_Fn(id) { console.log("Edit ID:", id); }