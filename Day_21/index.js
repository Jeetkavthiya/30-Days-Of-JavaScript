// Getting Element

// <!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <title>Document Object Model</title>
//     </head>
//     <body>
//      <h1 class='title' id='first-title'>First Title</h1>
//      <h1 class='title' id='second-title'>Second Title</h1>
//      <h1 class='title' id='third-title'>Third Title</h1>
//      <h1></h1>
//     </body>
// </html>

// Getting element by tag name
const allTitles = document.getElementsByTagName('h1')
console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4
for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]) // prints each elements in the HTMLCollection
}

// Getting elements by class name
const allTitles1 = document.getElementsByClassName('title')
console.log(allTitles1) //HTMLCollections
console.log(allTitles1.length) // 4
for (let i = 0; i < allTitles1.length; i++) {
    console.log(allTitles1[i]) // prints each elements in the HTMLCollection
}

// Getting elements by id
let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>

// Getting elements by using querySelector methods
let firstTitle1 = document.querySelector('h1') // select the first available h1 element
let firstTitle2 = document.querySelector('#first-title') // select id with first-title
let firstTitle3 = document.querySelector('.title') // select the first available element with class title

const allTitles2 = document.querySelectorAll('h1') // selects all the available h1 elements in the page
console.log(allTitles2.length) // 4
for (let i = 0; i < allTitles2.length; i++) {
    console.log(allTitles2[i])
}
allTitles2.forEach(title => console.log(title))
const allTitles3 = document.querySelectorAll('.title') // the same goes for selecting using class

// Adding attribute
const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'

const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')

// Adding attribute without setAttribute
// Another way to setting an attribute
titles[3].className = 'title'
titles[3].id = 'fourth-title'

// Adding class using classList
// Another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add('title', 'header-title')

// Removing class using remove
// Another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.remove('title', 'header-title')

// Adding Text to HTML element
// Adding Text content using textContent
const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'

// Adding Text Content using innerHTML
const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'

// < !DOCTYPE html >
// <html lang="en">
//     <head>
//         <title>JavaScript for Everyone:DOM</title>
//     </head>
//     <body>
//         <div class="wrapper">
//             <h1>Asabeneh Yetayeh challenges in 2020</h1>
//             <h2>30DaysOfJavaScript Challenge</h2>
//             <ul></ul>
//         </div>
//         <script>
//             const lists = `
//             <li>30DaysOfPython Challenge Done</li>
//             <li>30DaysOfJavaScript Challenge Ongoing</li>
//             <li>30DaysOfReact Challenge Coming</li>
//             <li>30DaysOfFullStack Challenge Coming</li>
//             <li>30DaysOfDataAnalysis Challenge Coming</li>
//             <li>30DaysOfReactNative Challenge Coming</li>
//             <li>30DaysOfMachineLearning Challenge Coming</li>`
//             const ul = document.querySelector('ul')
//             ul.innerHTML = lists
//         </script>
//     </body>
// </html>

// < !DOCTYPE html >
//     <html lang="en">
//         <head>
//             <title>JavaScript for Everyone:DOM</title>
//         </head>
//         <body>
//             <div class="wrapper">
//                 <h1>Asabeneh Yetayeh challenges in 2020</h1>
//                 <h2>30DaysOfJavaScript Challenge</h2>
//                 <ul>
//                     <li>30DaysOfPython Challenge Done</li>
//                     <li>30DaysOfJavaScript Challenge Ongoing</li>
//                     <li>30DaysOfReact Challenge Coming</li>
//                     <li>30DaysOfFullStack Challenge Coming</li>
//                     <li>30DaysOfDataAnalysis Challenge Coming</li>
//                     <li>30DaysOfReactNative Challenge Coming</li>
//                     <li>30DaysOfMachineLearning Challenge Coming</li>
//                 </ul>
//             </div>
//             <script>
//                 const ul = document.querySelector('ul')
//                 ul.innerHTML = ''
//             </script>
//         </body>
//     </html>

// Adding style
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    if (i % 2 === 0) {
        title.style.color = 'green'
    } else {
        title.style.color = 'red'
    }
})

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    if (i % 2 === 0) {
        title.style.backgroundColor = 'green'
    } else {
        title.style.backgroundColor = 'red'
    }
})

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    if (i % 2 === 0) {
        title.style.fontSize = '20px'
    } else {
        title.style.fontSize = '30px'
    }
})