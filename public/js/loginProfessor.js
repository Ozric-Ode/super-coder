const $signin = document.querySelector('.signin')
const $signinUsername = document.querySelector('#instituteId')
const $signinPassword = document.querySelector('#password')

$signin.addEventListener('click', async (e) => {
    e.preventDefault();
    const credentials = {
        Email: $signinUsername.value,
        password: $signinPassword.value
    }
    console.log('credentials ' + credentials.Email + ' ' + credentials.password)
    try {
        const response = await fetch('/login/professor', {
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
        // console.log(response.status)
        // window.alert('congratulations for logging in')
        delete data.Password;
        delete data.token;
        window.localStorage.setItem('Professor_Id', data.Professor_Id);
        window.localStorage.setItem('professor', JSON.stringify(data));
        window.location.href = '/profile/professor';
    } catch (error) {
        alert(error.message)
        console.error(error)
    }

})