
const $save = document.querySelector('#save')

$save.addEventListener('click', async (e) => {
    e.preventDefault();
    const selectedProblems=[];
    const removedProblems=[];
    
    $("#lstBox1 option").each(function(){
        var thisOptionValue=$(this).val().split(' ')[0];
        console.log(thisOptionValue);
        selectedProblems.push(thisOptionValue.trim())
    });
    
    $("#lstBox2 option").each(function(){
        var thisOptionValue=$(this).val().split(' ')[0];
        console.log(thisOptionValue);
        removedProblems.push(thisOptionValue.trim())
    });
    console.log(selectedProblems)
    const programming_test = {
        Test_Id: $('.testId').val(),
        Title: $('.title').val(),
        Date: $('.date').val(),
        Start_Time: $('#startTime').val(),
        End_Time: $('#endTime').val(),
        Course_Code:$('#course').val(),
        Professor_Id:parseInt(window.localStorage.getItem('Professor_Id')),
        ProblemsAdded:selectedProblems,
        ProblemsRemoved:removedProblems
    }
    console.log(programming_test);
    if(programming_test.End_Time<programming_test.Start_Time){
        return alert('End_Time should be after Start Time')
    }
   try {
        const response = await fetch('/editprogrammingtest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            body: JSON.stringify(programming_test)

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
        console.log(error)
    }

})