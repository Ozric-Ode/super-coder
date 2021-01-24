//const { json } = require("express");

    const $data=document.querySelector("#code");//not able to access
    const $btn= document.querySelector("#sub");
    const $output =document.querySelector('#sample_out')
    const $input=document.querySelector('#sample_in')

    const answer= async (obj) => {

        try{
            console.log(obj.lang);
        const res=await fetch("/submit",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'

            },
            body: JSON.stringify(obj)
        })
        console.log("hii");
      //  console.log(await res.json());
     //   const ansss=(await res);
        console.log(res);
    return res;
    }
    catch(e)
    {
        console.log(e);
        return e;
    }   
    }


    $btn.addEventListener("click",()=>{
        const obj = {
                code: "I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=",
                lang: "52"
            }
answer(obj).then((response)=>{
    console.log(response);
})


        console.log($data.value) 
    });
