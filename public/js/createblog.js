const output = document.getElementById('app');

// Create blog schema

class Blog {

    constructor(
      //Blog_Id,
        Content,
        blogDate,
        Upvotes,
        Title,
        Downvotes,
        Professor_Id,
        Student_Id,
        Problem_Id) {
       // this.Blog_Id = Blog_Id;
        this.Content = Content;
        this.Date = blogDate;
        this.Upvotes = Upvotes;
        this.Title = Title;
        this.Downvotes = Downvotes;
        this.Professor_Id = Professor_Id;
        this.Student_Id = Student_Id;
        this.Problem_Id = Problem_Id;


    }
}

const addblog = async(obj)=>
{
  try{
    const ans= await fetch('/addblog',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept':'*/*'
      },
      body:JSON.stringify(obj),
    })
    //const data= await ans.json();
  }
  catch(e){
    console.log(e);
  }
}
let blogs = [];
// Return each post
function returnPost() {
    const Content = document.getElementById("blogText");
    const Title = document.getElementById("blogTitle");
    const currDate=new Date().toLocaleDateString();
    var word=currDate.split("/");

    const blogDate = word[2]+"/"+word[0]+"/"+word[1];
    console.log(blogDate);
     obj=new Blog( Content.value, blogDate,0,Title.value,0,null,null,null);
      var sid = window.localStorage.getItem('studentid');
    var pid = window.localStorage.getItem('studentid');
    
    if(!(sid===undefined&&pid===undefined))
{
    if(sid===undefined)
    obj.Professor_Id=pid;
    else
    obj.Student_Id=sid;
}
   
console.log("hello");
console.log(obj);
addblog(obj);
   // blogs.push();
    // console.log(blogs);
     output.innerHTML = '';
   
       let html = '';
      html +=
            `
      <p>${obj.Title} </br>
         <b>Posted on:</b> ${new Date().toLocaleDateString()},

         ${new Date().toLocaleTimeString()}
      </p>
    `
    console.log("hjjjjjjjjjjjjjj");
  

    // blogs.sort((a, b) => {
    //     // sort by date added
    //     return new Date(b.date) - new Date(a.date);
    // }).forEach((blog) => {
      
    // });
    output.innerHTML = html;
    Content.value = "";
    Title.value = "";
}