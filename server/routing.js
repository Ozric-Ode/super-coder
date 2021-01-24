const receivetoken = require("./sendCode");
const getver=require("./getVerdict");
const express=require("express");

const approute=new express.Router();
//dummy obj
// const obj = {
//     code: "I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=",
//     lang: 52
// }


approute.post('/submit',(req,res) => {
   
    const obj = {
            code:req.body.code,
            lang:req.body.lang,
        }
         console.log("hedddddddd"+obj.code);
    //   return  res.send("asddddd");
        
      
     // return res.send(req.code);
        receivetoken(obj, (obj1, err) => {

            if (err)
            {
            console.log("bro...error occured for token generation!!");
            return res.status(500).send(err);
            }
                else {
                //obj.token
                console.log("token is generating!");
                console.log(obj1.data.token);

                setTimeout(() => {
                    getver(obj1.data.token, (obj2,er) => {
                        if(er)
                        {
                            return res.status(500).send(er);
                        }
                        console.log((obj2.data.stdout));
                        return res.send(obj2.data.stdout);
                    })
                }, 5000);
        
            }
        })
}
)

module.exports=approute;