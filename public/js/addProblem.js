const $checkProblemId=document.querySelector('.checkIfAvailable')
const $save = document.querySelector('#save')

$checkProblemId.addEventListener('click', async (e) => {
    e.preventDefault();
    const problemId = {
        Problem_Id: $('.problemCode').val(),
    }
    console.log(problemId);
    try {
        const response = await fetch('/checkproblemid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            body: JSON.stringify(problemId)

        })
        const data = await response.json()
        console.log(data)
        if (response.status !== 200) {
            throw new Error(data.errormsg)
        }
        // console.log(response.status)
        window.alert(data.msg)
    } catch (error) {
        alert(error.message)
        console.error(error)
    }
})


$save.addEventListener('click', async (e) => {
    e.preventDefault();
    
   
    
const readUploadedFileAsBinary = (inputFile) => {
    const temporaryFileReader = new FileReader();
  
    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
  
      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsBinaryString(inputFile);
    });
  };

//   document.querySelector('.inputFile').files[0]
//   document.querySelector('.outputFile').files[0]
  const programming_problem = {
    Problem_Id:$('.problemCode').val(),
    Title: $('.title').val(),
    Professor_Id:parseInt(window.localStorage.getItem('Professor_Id')),
    Problem_Statement: $('.content').val(),
    Time_Limit:$('.timeLimit').val(),
    Input: await readUploadedFileAsBinary(document.querySelector('.inputFile').files[0]),
    Output: await readUploadedFileAsBinary(document.querySelector('.outputFile').files[0])
}
console.log(programming_problem);
   try {
        const response = await fetch('/addprogrammingproblem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            body: JSON.stringify(programming_problem)

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