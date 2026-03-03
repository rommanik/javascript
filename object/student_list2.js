// 1. We define the instance globally or inside the function so it's accessible
const MyStudent = new Student();

// Load the table as soon as the file runs
LoadTableArea();

function LoadTableArea() {
    const tableBody = document.getElementById('studentTableBody');
    if (!tableBody) return; // Safety check
    
    tableBody.innerHTML = ""; 

    // 2. Fixed ID case-sensitivity: 'textSearch' matches your HTML
    const searchInput = document.getElementById('textSearch');
    const searchValue = searchInput ? searchInput.value.toLowerCase() : "";

    // Grab the data using the instance we created
    const allStudents = MyStudent.StudentList();

    // Filter based on search text
    const filteredStudents = allStudents.filter(student => 
        student.first_name.toLowerCase().includes(searchValue) || 
        student.last_name.toLowerCase().includes(searchValue) ||
        student.student_code.toLowerCase().includes(searchValue)
    );

    let i = 0;

    filteredStudents.forEach(function (arrayItem) {
        i++;
        let row = tableBody.insertRow();
        
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        
        cell1.setAttribute("align", "center");
        cell1.innerHTML = i;

        cell2.setAttribute("align", "center");
        cell2.innerHTML = arrayItem.student_code;

        cell3.innerHTML = `<div class='d-flex justify-content-between'>
                               <div>${arrayItem.last_name} ${arrayItem.first_name}</div>
                               <div>[${arrayItem.gender}]</div>
                           </div>`;

        cell4.setAttribute("class", "text-center");
        cell4.innerHTML = arrayItem.contact;

        cell5.setAttribute("class", "text-center");
        cell5.innerHTML = `<button type='button' class='btn btn-success btn-sm' onclick='OnOff_Fn(${arrayItem.id})'>On/Off</button>`;

        cell6.setAttribute("class", "text-center");
        cell6.innerHTML = `<button type='button' class='btn btn-danger btn-sm' onclick='Delete_Fn(${arrayItem.id})'>Delete</button>`;

        cell7.setAttribute("class", "text-center");
        cell7.innerHTML = `<button type='button' class='btn btn-primary btn-sm' onclick='Edit_Fn(${arrayItem.id})'>Edit</button>`;
    });
}

// 3. This function is required to make the button in your HTML work
function SearchSet() {
    LoadTableArea();
}

function OnOff_Fn(id) { alert("On/Off on ID: " + id); }
function Delete_Fn(id) { alert("Delete on ID: " + id); }
function Edit_Fn(id) { alert("Edit on ID: " + id); }