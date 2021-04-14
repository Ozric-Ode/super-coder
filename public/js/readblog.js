const $author=document.querySelector('#author');
const $title=document.querySelector('#title');
const $ddate=document.querySelector('#date');
const $Content=document.querySelector('#blogText');
const blogs= async(obj)=>{
    try{
        const data = await fetch('/readblog',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'*/*',
            },
             body:JSON.stringify(obj),
        })
        console.log(data.body);
      //  return data;
        const nww= await data.json();//chexck whether json is req or not
   console.log(nww);
    return nww;
    }
    catch(e){
        console.log(e);
    }
}
const setd=async (obj)=>{
    if(obj===undefined)
    {
localStorage.setItem('moreblog',0);
         $Content.innerHTML="";
     $author.innerHTML="";
     $title.innerHTML="Sorry bro....no more blogs available!!!";
     $ddate.innerHTML="";
    return;
    }
   
    $Content.innerHTML=obj.Content;
    $author.innerHTML=obj.Student_Id;
    $title.innerHTML=obj.Title;
    $ddate.innerHTML=obj.Date;
}
 
console.log("heyyyyybb");
//it is dummy

var oftt=0;
var moreblog=1,lessblog=0;
// oftt=localStorage.getItem('oft');
//if(oftt===undefined)oftt=0;
const ob={
    lt:1,
    oft:parseInt(0)+1
}
/////////////for 1st execution!!
    blogs(ob).then(response=>{
    console.log("eknumber");

    console.log(response.row[0]);
     setd(response.row[0]);
    
})
localStorage.setItem('oft',ob.oft);
localStorage.setItem('moreblog',1);
//localStorage.setItem('lessblog',0);
////////////////////////////////
function nextPage(){
//ob.oft++;
var ofst=parseInt(localStorage.getItem('oft'));
moreblog=localStorage.getItem('moreblog');
ob.oft=parseInt(ofst)+1;
if(moreblog==1)
{
    blogs(ob).then(response=>{
    console.log("eknumber");
    console.log(response.row[0]);
     setd(response.row[0]);
    
})
localStorage.setItem('oft',ob.oft);
}
}
////////////
function previousPage(){
//ob.oft++;
var ofst=parseInt(localStorage.getItem('oft'));
//lessblog=localStorage.getItem('lessblog');

if(ob.oft-1>parseInt(0))
{
    ob.oft=ofst-1;
    blogs(ob).then(response=>{
    console.log("eknumber");
    console.log(response.row[0]);
     setd(response.row[0]);
    
})
localStorage.setItem('oft',ob.oft);
localStorage.setItem('moreblog',1);
}
}

console.log('finalllyy');