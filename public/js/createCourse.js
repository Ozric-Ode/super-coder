const $addCourse=document.querySelector('.addCourse')
const $semester = document.querySelector('#semester')
const $batch = document.querySelector('#batch')

$addCourse.addEventListener('click', async (e) => {
    e.preventDefault();
    const course = {
        Course_Code: $('.courseCode').val(),
        Name: $('.courseName').val(),
        Semester: $semester.value,
        Batch:$batch.value
    }
    console.log(course);
    try {
        const response = await fetch('/addcourse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            body: JSON.stringify(course)

        })
        const data = await response.json()
        console.log(data)
        if (response.status !== 200) {
            throw new Error(data.errormsg)
        }
        // console.log(response.status)
        window.alert(data.msg)
        window.location.href = '/profile/professor';
    } catch (error) {
        alert(error.message)
        console.error(error)
    }
})
