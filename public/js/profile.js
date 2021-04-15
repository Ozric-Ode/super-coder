const $instituteid = document.querySelector('.instituteid')
const $name = document.querySelector('.name')
const $semester = document.querySelector('.semester')
const $batch = document.querySelector('.batch')
const $toprightname = document.querySelector('.toprightname')
const $firstName = document.querySelector('.firstName')
const $lastName = document.querySelector('.lastName')
const $semesterTextbox = document.querySelector('.semesterTb')
const $batchTextbox = document.querySelector('.batchTb')
const $editButton = document.querySelector('.editDetails')

const $saveChanges = document.querySelector('.saveChanges')
console.log(JSON.parse(window.localStorage.getItem('student')))
const student = JSON.parse(window.localStorage.getItem('student'))


window.onload = () => {
    $firstName.value = student.First_Name
    $lastName.value = student.Last_Name
    $semesterTextbox.value = student.Semester
    $batchTextbox.value = student.Batch;
    $instituteid.innerHTML = student.Student_Id;
    $name.innerHTML = student.First_Name + ' ' + student.Last_Name;
    $semester.innerHTML = student.Semester;
    $batch.innerHTML = student.Batch;
    $toprightname.innerHTML = student.First_Name + ' ' + student.Last_Name;
}

$saveChanges.addEventListener('click', async (e) => {

    e.preventDefault()
    const user = {
        Student_Id:student.Student_Id,
        First_Name:$firstName.value.trim(),
        Last_Name:$lastName.value.trim(),
        Batch:$batchTextbox.value,
        Semester:$semesterTextbox.value    
    }
    student.First_Name=$firstName.value.trim()
    student.Last_Name=$lastName.value.trim(),
    student.Batch=$batchTextbox.value,
    student.Semester=$semesterTextbox.value
    window.localStorage.setItem('student', JSON.stringify(student));
    const response = await fetch('/updatestudent', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)

    })
    
    window.location.href = '/profile';

   
})