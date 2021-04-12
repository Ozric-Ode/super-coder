const $signup = document.querySelector('.Signup')
const $firstName = document.querySelector('#FirstName')
const $lastName = document.querySelector('#LastName')
const $studentId = document.querySelector('#StudentId')
const $email = document.querySelector('#email')
const $password = document.querySelector('#Password')
const $repeatPassword = document.querySelector('#RepeatPassword')

$signup.addEventListener('click', async(e) => {
   
    e.preventDefault();
    try {
    if($password.value!= $repeatPassword.value)
    {
        return alert('Passwords do not match!!')
    }
    const user = {
        Student_Id: $studentId.value,
        email: $email.value,
        password: $password.value,
        First_Name:$firstName.value.trim(),
        Last_Name:$lastName.value.trim()
    }
   
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)

        })
        window.location.href = '/profile';
    } catch (error) {
        console.error('madarchod ' + error);
        alert('error')
    }
})



