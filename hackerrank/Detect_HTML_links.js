function processData(input) {
    //Enter your code here
    input = input.split('\n').splice(1).join('')
    // console.log(input)
    var aTag = /<a href="(.+?)".*?>(.+?)<\/a>/g
    var selfClosingTag = /<.+? .*\/>/
    var normalTag = /<(.+?)>(.*)<\/\1>/
    while (match = aTag.exec(input)){
      
      var href = match[1]
      var content = match[2]
      if (match = selfClosingTag.exec(content)){
        content = ''
      }
      else {
        while (match = normalTag.exec(content)) {
          content = match[2]
          normalTag.lastIndex = 0
        }
      }
      console.log(href + ',' + content)
    }
      
} 
var input = '2\n\
<p><a href="/wiki/File:Female_and_male_Pardalotus_punctatus.jpg" title="About this image"><img alt="About this image" src="//bits.wikimedia.org/static-1.22wmf7/extensions/ImageMap/desc-20.png" style="border: none;" /></a></p>\n\
<div class="more-info"><a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a></div>'
// processData(input)

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});