const $professorId = document.querySelector('.professorId')
const $name = document.querySelector('.name')
const $email = document.querySelector('.email')

console.log(JSON.parse(window.localStorage.getItem('professor')))
const professor = JSON.parse(window.localStorage.getItem('professor'))


window.onload = () => {
    $professorId.innerHTML = professor.Professor_Id
    $name.innerHTML = professor.First_Name + ' ' + professor.Last_Name;
    $email.innerHTML = professor.Email;
}

// $saveChanges.addEventListener('click', async (e) => {

//     e.preventDefault()
//     const user = {
//         Student_Id:student.Student_Id,
//         First_Name:$firstName.value.trim(),
//         Last_Name:$lastName.value.trim(),
//         Batch:$batchTextbox.value,
//         Semester:$semesterTextbox.value    
//     }
//     student.First_Name=$firstName.value.trim()
//     student.Last_Name=$lastName.value.trim(),
//     student.Batch=$batchTextbox.value,
//     student.Semester=$semesterTextbox.value
//     window.localStorage.setItem('student', JSON.stringify(student));
//     const response = await fetch('/updatestudent', {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(user)

//     })
    
//     window.location.href = '/profile';

   
// })