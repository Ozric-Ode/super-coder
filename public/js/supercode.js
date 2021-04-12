const $btn = document.querySelector('#run')
const $text = document.querySelector('#code')
const $solution = document.querySelector('#sample_out')
const $input = document.querySelector('#sample_in')
const $languageSelector = document.querySelector('#language-selector')

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


$btn.addEventListener('click', async() => {
    const data = window.btoa($text.value)
    const obj = {
        code: data,
        stdin: window.btoa($input.value) || null,
        language_id: $languageSelector.value
    }

    // getdata(obj).then((result) => {
    //     console.log(result)
    //     console.log(result.stdout)
    //     $solution.value = window.atob(result.stdout)


    // })

    
    const result = await getdata(obj);
    console.log(result)
    $solution.value = window.atob(result.stdout)
})