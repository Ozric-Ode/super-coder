// var unirest = require("unirest");

// var req = unirest("POST", "https://judge0-ce.p.rapidapi.com/submissions");

// req.query({
// 	"base64_encoded": "true",
// 	"fields": "*"
// });

// req.headers({
// 	"content-type": "application/json",
// 	"x-rapidapi-key": "9214715568msh6f4e8adb1960f3ep1f7058jsn807141980d3f",
// 	"x-rapidapi-host": "judge0-ce.p.rapidapi.com",
// 	"useQueryString": true
// });

// req.type("json");
// req.send({
// 	"language_id": 52,
// 	"source_code": "I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=",
// 	"stdin": "SnVkZ2Uw"
// });

// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });


const bcrypt = require('bcrypt')
const abc=async ()=>{
const password = await bcrypt.hash('antriksh.goswami@iiitv', 8)
console.log(password);
}

abc()