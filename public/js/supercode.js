var requests = require("request");

var req = requests("POST", "https://judge0-ce.p.rapidapi.com/submissions");

req.query({
	"base64_encoded": "true",
	"fields": "*"
});

req.headers({
	"content-type": "application/json",
	"x-rapidapi-key": "4e1e039266mshcce86ed12ec9438p14e845jsn8d68057c7eb8",
	"x-rapidapi-host": "judge0-ce.p.rapidapi.com",
	"useQueryString": true
});

req.type("json");
req.send({
	"language_id": 52,
	"source_code": "I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=",
	"stdin": "SnVkZ2Uw"
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});