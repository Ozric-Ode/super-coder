const $run = document.querySelector('#run')
const $code = document.querySelector('#code')
const $solution = document.querySelector('#sample_out')
const $input = document.querySelector('#sample_in')
const $languageSelector = document.querySelector('#language-selector')
const $submitSolution = document.querySelector('.submitSolution');
const $problemId = document.querySelector('.problemId')
const getdata = async(obj) => {
    try {
        const res = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify(obj)
        })
        const data = await res.json();
        console.log(data);
        return data;
    } catch (e) {
        console.log(e)
    }

}

// const workontoken = async (obj) => {
//     try {
//         const res = await fetch('/submit/token', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': '*/*'

//             },
//             body: JSON.stringify(obj)
//         })
//         const data = await res.json()
//         console.log(data)
//         return data
//     }
//     catch (e) {
//         console.log(e)
//     }

// }


$run.addEventListener('click', async(e) => {
    e.preventDefault()
    const data = window.btoa($code.value)
    const obj = {
        code: data,
        stdin: window.btoa($input.value) || null,
        language_id: $languageSelector.value
    }
 
    const result = await getdata(obj);
   console.log(result)
    $solution.value = window.atob(result.stdout)
})


$submitSolution.addEventListener('click', async(e) => {
    e.preventDefault()
   
    const data = window.btoa($code.value)
    const obj = {
        code: data,
        stdin: window.btoa($input.value) || null,
        language_id: $languageSelector.value
    }
    const res = await fetch(`/submitSolution/${$problemId.value}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        },
        body: JSON.stringify(obj)
    })
    const result = await res.json();
    console.log(result)
    $solution.value = window.atob(result.stdout)
})