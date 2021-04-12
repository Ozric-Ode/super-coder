//const { json } = require("express");

    const $data=document.querySelector("#code");//not able to access
    const $btn= document.querySelector("#run");
    const $output =document.querySelector('#sample_out')
    const $input=document.querySelector('#sample_in')
    const $lang=document.querySelector('#lang')


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
        //console.log(res);
      //  console.log(res.body);
     const data = await res.json();
        console.log(data);
        return data;
     //   console.log( res);
   // return res;
    }
    catch(e)
    {
        console.log(e);
        return e;
    }   
    }


    $btn.addEventListener("click",()=>{
        const obj = {
                code: window.btoa($data.value), 
                //"I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=",
                lang: $lang.value
            }
answer(obj).then((response)=>{
    console.log("hgggggggg");
    console.log(response.output);
    $output.value=window.atob(response.output);
})
        console.log($lang.value)
        console.log($data.value) 
    });
