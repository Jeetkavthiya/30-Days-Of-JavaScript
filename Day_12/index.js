// Regular Expressions

// Creating a pattern with RegExp Constructor
// without flag
let pattern = 'love'
let regEx = new RegExp(pattern)

// with flag
let pattern1 = 'love'
let flag1 = 'gi'
let regEx1 = new RegExp(pattern1, flag1)

let regEx2 = new RegExp('love', 'gi')

// Creating a pattern without RegExp Constructor
let regEx3 = /love/gi

// RegExpp Object Methods

// Testing for a match
const str = 'I love JavaScript'
const pattern2 = /love/
const result = pattern2.test(str)
console.log(result) // true

// Array containing all of the match
const str3 = 'I love JavaScript'
const pattern3 = /love/
const result3 = str3.match(pattern3)
console.log(result3)
// ["love", index: 2, input: "I love JavaScript", groups: undefined]
const str4 = 'I love JavaScript'
const pattern4 = /love/g
const result4 = str4.match(pattern4)
console.log(result4) // ["love"]

const str5 = 'I love JavaScript'
const pattern5 = /love/g
const result5 = str5.search(pattern5)
console.log(result5) // 2

// Replacing a substring
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)
// JavaScript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language

matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)
// JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language
matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)
// JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language
const txt1 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt1.replace(/%/g, '')
console.log(matches)
// I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interestin

// Square Bracket

const pattern11 = '[Aa]pple' // this square bracket means either A or a
const txt11 = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches11 = txt11.match(pattern11)

console.log(matches11)
// ["Apple", index: 0, input: "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away.", groups: undefined]
const pattern12 = /[Aa]pple/g // this square bracket means either A or a
const txt12 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches12 = txt12.match(pattern12)

console.log(matches12) // ["Apple", "apple"]

const pattern13 = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
const txt13 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches13 = txt13.match(pattern13)

console.log(matches13) // ["Apple", "banana", "apple", "banana", "Banana"]

// Escape character(\) in RegExp
const pattern15 = /\d/g  // d is a special character which means digits
const txt15 = 'This regular expression example was made in January 12,  2020.'
const matches15 = txt15.match(pattern15)
console.log(matches15)  // ["1", "2", "2", "0", "2", "0"], this is not what we want

const pattern16 = /\d+/g  // d is a special character which means digits
const txt16 = 'This regular expression example was made in January 12,  2020.'
const matches16 = txt16.match(pattern16)

console.log(matches16)  // ["12", "2020"], this is not what we want

// One or more times(+)
const pattern17 = /\d+/g  // d is a special character which means digits
const txt17 = 'This regular expression example was made in January 12,  2020.'
const matches17 = txt17.match(pattern17)
console.log(matches17)  // ["12", "2020"], this is not what we want

// Period(.)
const pattern18 = /[a]./g  // this square bracket means a and . means any character except new line
const txt18 = 'Apple and banana are fruits'
const matches18 = txt18.match(pattern18)
console.log(matches18)  // ["an", "an", "an", "a ", "ar"]

const pattern19 = /[a].+/g  // . any character, + any character one or more times 
const txt19 = 'Apple and banana are fruits'
const matches19 = txt19.match(pattern19)

console.log(matches19)  // ['and banana are fruits']

// Zero or more times(*)
const pattern20 = /[a].*/g  //. any character, + any character one or more times 
const txt20 = 'Apple and banana are fruits'
const matches20 = txt20.match(pattern20)
console.log(matches20)  // ['and banana are fruits']
// Zero or one times(?)
const txt21 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern21 = /[Ee]-?mail/g  // ? means optional
const matches21 = txt21.match(pattern21)
console.log(matches21)  // ["e-mail", "email", "Email", "E-mail"]

// Quantifier in RegExp
const txt22 = 'This regular expression example was made in December 6,  2019.'
const pattern22 = /\\b\w{4}\b/g  //  exactly four character words
const matches22 = txt22.match(pattern22)
console.log(matches22)  //['This', 'made', '2019']

const txt23 = 'This regular expression example was made in December 6,  2019.'
const pattern23 = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
const matches23 = txt23.match(pattern23)
console.log(matches23)  //['This', 'made']

const txt24 = 'This regular expression example was made in December 6,  2019.'
const pattern24 = /\d{4}/g  // a number and exactly four digits
const matches24 = txt24.match(pattern24)
console.log(matches24)  // ['2019']

const txt25 = 'This regular expression example was made in December 6,  2019.'
const pattern25 = /\d{1,4}/g   // 1 to 4
const matches25 = txt.match(pattern)
console.log(matches25)  // ['6', '2019']

// Cart ^
const txt26 = 'This regular expression example was made in December 6,  2019.'
const pattern26 = /^This/ // ^ means starts with
const matches26 = txt26.match(pattern26)
console.log(matches26)  // ['This']

// Negation
const txt27 = 'This regular expression example was made in December 6,  2019.'
const pattern27 = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches27 = txt27.match(pattern27)
console.log(matches27)  // ["6", "2019"]

// Exact match
let pattern28 = /^[A-Z][a-z]{3,12}$/;
let name28 = 'Asabeneh';
let result28 = pattern28.test(name28)
console.log(result28) // true
