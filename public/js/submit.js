const $run = document.querySelector('#run');
const $code = document.querySelector('#code');
const $solution = document.querySelector('#sample_out');
const $input = document.querySelector('#sample_in');
const $languageSelector = document.querySelector('#language-selector');
const $submitSolution = document.querySelector('.submitSolution');
const $problemId = document.querySelector('.problemId');
const $testId = document.querySelector('.testId');
const $loader = document.querySelector('#loader');
const getdata = async (obj) => {
    try {
        $loader.style.display = 'block';
        const res = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify(obj)
        });
        const data = await res.json();
        // console.log(data);
        return data;
    } catch (e) {
        // console.log(e);
        alert('something went wrong');
    }

};


$run.addEventListener('click', async () => {
    const data = window.btoa($code.value);
    const obj = {
        code: data,
        stdin: window.btoa($input.value) || null,
        language_id: $languageSelector.value
    };

    try {

        const result = await getdata(obj);
        $loader.style.display = 'none';
        $solution.value = window.atob(result.stdout);
    } catch (error) {
        alert('Something Went Wrong');
    }
});

$submitSolution.addEventListener('click', async (e) => {
    e.preventDefault();
    $loader.style.display = 'block';
    // console.log($testId.innerHTML.split(': ')[1])
    const data = window.btoa($code.value);
    const obj = {
        code: data,
        stdin: window.btoa($input.value) || null,
        language_id: $languageSelector.value
    };
    const res = await fetch(`/submitSolution/${$problemId.value}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        },
        body: JSON.stringify(obj)
    });
    const result = await res.json();
    $loader.style.display = 'none';
    // console.log(result);
    // console.log(result.status);
    // $solution.value = window.atob(result.stdout)

    if (result.status.id === 4) {
        alert("Wrong Answer");
    }
    else if (result.status.id === 3) {
        const student_Id = JSON.parse(window.localStorage.getItem('Student_Id'));
        alert('Congratulations All Test Cases Passed');
        // console.log($testId.innerHTML.split(': ')[1])
        const obj = {
            Test_Id: $testId.innerHTML.split(': ')[1],
            Student_Id: student_Id
        };
        const res = await fetch(`/addToAttempt`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify(obj)
        });

    }
});