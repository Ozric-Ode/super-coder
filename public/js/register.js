const $signup = document.querySelector('.Signup')
const $firstName = document.querySelector('#FirstName')
const $lastName = document.querySelector('#LastName')
const $semester = document.querySelector('#semester')
const $batch = document.querySelector('#batch')
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
        Last_Name:$lastName.value.trim(),
        Batch:$batch.value,
        Semester:$semester.value    
    }
   
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)

        })
      
        if(response.status===400)
        {     const data=await response.json()
            console.log(data)
           return window.alert(data.msg)
        }
        if(response.status===200)
        {
            console.log('register ho gaya')
        delete user.password
        window.localStorage.setItem('Student_Id', user.Student_Id);
        window.localStorage.setItem('student', JSON.stringify(user));
        window.location.href = '/profile';
        }
    } catch (error) {
        console.error('adsad ' + error);
        alert(error.message)
    }
})



