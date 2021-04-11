const $signin = document.querySelector('.signin')
const $signinUsername = document.querySelector('#instituteId')
const $signinPassword = document.querySelector('#password')

$signin.addEventListener('click', async (e) => {
    e.preventDefault();
    const credentials = {
        Student_Id: $signinUsername.value,
        password: $signinPassword.value
    }
    console.log('credentials ' + credentials.Student_Id + ' ' + credentials.password)
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            body: JSON.stringify(credentials)

        })
        const data = await response.json()
        console.log(data)
        if (response.status !== 200) {
            throw new Error(data.errormsg)
        }
        console.log(response.status)
        // window.alert('congratulations for logging in')
        window.location.href = '/profile';
    } catch (error) {
        alert(error.message)
        console.error(error)
    }

})