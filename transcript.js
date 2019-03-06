var fs = require('fs')

var json = fs.readFileSync('./people.json')
var topObject = JSON.parse(json)

var paragraphs = []

// Inside loop
var paragraph = ""

paragraph = paragraph + content

paragraphs.push(paragraph)

console.log(paragraphs)
// console.log(topObject['results']['transcripts'])