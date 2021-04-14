//const $author=document.querySelector('#author');
//const $title=document.querySelector('#title');
//const $ddate=document.querySelector('#date');
//const $Content=document.querySelector('#blogText');
$(function() {
    $(".triangle-up").click(function() {
        var count = parseInt($("~ .text", this).text());

        var count = count + 1;
        $("~ .text", this).text(count);

    }, );
});

$(function() {
    $(".triangle-down").click(function() {
        var count = parseInt($("~ .text", this).text());

        var count = count - 1;

        $("~ .text", this).text(count);

    });
});

// ////////////////////
//to make for it.................in serverside!!!
// const blogs= async(obj)=>{
//     try{
//         const data = await fetch('/blog',{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json',
//                 'Accept':'*/*',
//             },
//              body:JSON.stringify(obj),
//         })
//         console.log(data.body);
//       //  return data;
//         const nww= await data.json();//chexck whether json is req or not
//    console.log(nww);
//     return nww;
//     }
//     catch(e){
//         console.log(e);
//     }
// }
// const setd=async (obj)=>{
//     //$Content.innerHTML=obj.Content;
//     //$author.innerHTML=obj.Student_Id;
//     $title.innerHTML=obj.Title;
//   //  $ddate.innerHTML=obj.Date;
// }
// console.log("heyyyyybb");

// const ob={
//     'lt':1,
//     'oft':1
// }
// blogs(ob).then(response=>{
//     console.log("eknumber");
//     console.log(response.row[0]);
//      setd(response.row[0]);
    
// })
// console.log('finalllyy');
//console.log(finalans.body);
//const ans=await blogs();
//console.log( ans);