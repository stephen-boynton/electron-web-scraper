const cheerio = require("cheerio");
const fs = require("fs");
const request = require("request");
let webPage = "";

function getData(url) {
	return new Promise(function(resolve, reject) {
		request(url, (err, res, body) => {
			console.log(res.statusCode);
			webPage = body;
			fs.writeFile("./files/temp/temp-page.txt", body, "utf8", () => {
				console.log("File has been written");
				resolve("success");
			});
		});
	});
}

module.exports = {
	getData
};

// var cheerio = require('cheerio');
// var fs = require('fs');
//
// request("http://marvel.com/comics/characters", function(error, response, body) {
//   if(error) {
//     console.log("Error: " + error);
//   }
//   console.log("Status code: " + response.statusCode);
//   const monsterList = [];
//   const $ = cheerio.load(body);
//
//
//   const monst = $('li').children().each(function (i, el) {
//     monsterList[i] = '"' + $(this).text() + '"';
//   })
//
//   fs.writeFile('monsterlist.js', monsterList, 'utf8', function () {
//     console.log("File has been written");
//   })
//
//   });
