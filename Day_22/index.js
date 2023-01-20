// Document Object Model

// Creating an Element
// <!DOCTYPE html >
//     <html>
//         <head>
//             <title>Document Object Model:30 Days Of JavaScript</title>
//         </head>
//         <body>
//             <script>
//                 let title = document.createElement('h1')
//                 title.className = 'title'
//                 title.style.fontSize = '24px'
//                 title.textContent = 'Creating HTML element DOM Day 2'

//                 console.log(title)
//             </script>
//         </body>
//     </html>

// Creating Elements
// < !DOCTYPE html >
//     <html>
//         <head>
//             <title>Document Object Model:30 Days Of JavaScript</title>
//         </head>
//         <body>
//             <script>
//                 let title
//                 for (let i = 0; i < 3; i++) {
//                     title = document.createElement('h1')
//                      title.className = 'title'
//                      title.style.fontSize = '24px'
//                      title.textContent = i
//                      console.log(title)
//                  }
//             </script>
//         </body>
//     </html>

// Appending child to a parent element
// < !DOCTYPE html >
//     <html>
//         <head>
//             <title>Document Object Model:30 Days Of JavaScript</title>
//         </head>
//         <body>
//             <script>
//         // creating multiple elements and appending to parent element
//                 let title
//                 for (let i = 0; i < 3; i++) {
//                     title = document.createElement('h1')
//                     title.className = 'title'
//                     title.style.fontSize = '24px'
//                     title.textContent = i
//                     document.body.appendChild(title)
//                 }
//             </script>
//         </body>
//     </html>

// Removing a child element from a parent node
// < !DOCTYPE html >
//     <html>
//         <head>
//             <title>Document Object Model:30 Days Of JavaScript</title>
//         </head>
//         <body>
//             <h1>Removing child Node</h1>
//             <h2>Asabeneh Yetayeh challenges in 2020</h1>
//             <ul>
//                 <li>30DaysOfPython Challenge Done</li>
//                 <li>30DaysOfJavaScript Challenge Done</li>
//                 <li>30DaysOfReact Challenge Coming</li>
//                 <li>30DaysOfFullStack Challenge Coming</li>
//                 <li>30DaysOfDataAnalysis Challenge Coming</li>
//                 <li>30DaysOfReactNative Challenge Coming</li>
//                 <li>30DaysOfMachineLearning Challenge Coming</li>
//             </ul>
//             <script>
//                 const ul = document.querySelector('ul')
//                 const lists = document.querySelectorAll('li')
//                 for (const list of lists) {
//                     ul.removeChild(list)
//                 }
//             </script>
//         </body>
//     </html>

