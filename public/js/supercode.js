

const $btn=document.querySelector('#fetch')
const $text=document.querySelector('#code')

const getdata=async(obj)=>{
    try
    {
const res=await fetch('/submit',{
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
       
      },
    body: JSON.stringify(obj)
})
const data=await res.json()
return data
    }
    catch(e)
    {
        console.log(e)
    }

}

$btn.addEventListener('click',function(){
    const data=window.btoa($text.value)
    const obj={
        code:data
    }
    
    getdata(obj).then(res=>{
        console.log(res)
    })

})