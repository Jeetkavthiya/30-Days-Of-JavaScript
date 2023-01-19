// Exercises : Level 1

// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// <!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <title>Document Object Model</title>
//     </head>
//     <body>
//      <p class='title' id='first-title'>First Title</p>
//      <p class='title' id='second-title'>Second Title</p>
//      <p class='title' id='third-title'>Third Title</p>
//      <p class='title' id='third-title'>Third Title</p>
//     </body>
// </html>
const first = document.querySelector('p')

// Get each of the the paragraph using document.querySelector('#id') and by their id
const first1 = document.querySelector('#first-title')

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const allP = document.querySelectorAll('p')

// Loop through the nodeList and get the text content of each paragraph
for (let i = 0; i < allP.length; i++) {
    console.log(allP[i])
}

// Set a text content to paragraph the fourth paragraph, Fourth Paragraph
const fourth = document.getElementById("#fouth-title")
fourth.innerHTML = "Fourth Paragraph"


// Exercises : Level 2

// Change stye of each paragraph using JavaScript(eg.color, background, border, font - size, font - family)
const titles = document.querySelectorAll('p')
titles.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    title.style.fontFamily = "sans-serif"
    if (i % 2 === 0) {
        title.style.color = 'green'
        title.style.backgroundColor = "red"
    } else {
        title.style.color = 'red'
        title.style.backgroundColor = "green"
    }
})

// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
titles.forEach((title, i) => {
    if (i % 2 === 0) {
        title.style.color = 'green'
    } else {
        title.style.color = 'red'
    }
})