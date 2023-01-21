// Event Listeners

// click
// < !DOCTYPE html >
//     <html>
//         <head>
//             <title>Document Object Model</title>
//         </head>

//         <body>
//             <button>Click Me</button>

//             <script>
//                 const button = document.querySelector('button')
//       button.addEventListener('click', e => {
//                     console.log('e gives the event listener object:', e)
//         console.log('e.target gives the selected element: ', e.target)
//                 console.log(
//                 'e.target.textContent gives content of selected element: ',
//                 e.target.textContent
//                 )
//       })
//             </script>
//         </body>
//     </html>

// Double Click
// < !DOCTYPE html >
//     <html>
//         <head>
//             <title>Document Object Model</title>
//         </head>

//         <body>
//             <button>Click Me</button>
//             <script>
//                 const button = document.querySelector('button')
//       button.addEventListener('dblclick', e => {
//                     console.log('e gives the event listener object:', e)
//         console.log('e.target gives the selected element: ', e.target)
//                 console.log(
//                 'e.target.textContent gives content of selected element: ',
//                 e.target.textContent
//                 )
//       })
//             </script>
//         </body>
//     </html>

// Mouse enter
// < !DOCTYPE html >
//     <html>
//         <head>
//             <title>Document Object Model</title>
//         </head>

//         <body>
//             <button>Click Me</button>
//             <script>
//                 const button = document.querySelector('button')
//       button.addEventListener('mouseenter', e => {
//                     console.log('e gives the event listener object:', e)
//         console.log('e.target gives the selected element: ', e.target)
//                 console.log(
//                 'e.target.textContent gives content of selected element: ',
//                 e.target.textContent
//                 )
//       })
//             </script>
//         </body>
//     </html>


// Getting value from an input element

// input value
// < !DOCTYPE html >
//     <html>
//         <head>
//             <title>Document Object Model:30 Days Of JavaScript</title>
//         </head>

//         <body>
//             <h1>Body Mass Index Calculator</h1>

//             <input type="text" id="mass" placeholder="Mass in Kilogram" />
//             <input type="text" id="height" placeholder="Height in meters" />
//             <button>Calculate BMI</button>

//             <script>
//                 const mass = document.querySelector('#mass')
//                 const height = document.querySelector('#height')
//                 const button = document.querySelector('button')

//                 let bmi
//       button.addEventListener('click', () => {
//                     bmi = mass.value / height.value ** 2
//         alert(`your bmi is ${bmi.toFixed(2)}`)
//                 console.log(bmi)
//       })
//             </script>
//         </body>
//     </html>

// input event and change
// < !DOCTYPE html >
//     <html>
//         <head>
//             <title>Document Object Model:30 Days Of JavaScript</title>
//         </head>

//         <body>
//             <h1>Data Binding using input or change event</h1>

//             <input type="text" placeholder="say something" />
//             <p></p>

//             <script>
//                 const input = document.querySelector('input')
//                 const p = document.querySelector('p')

//       input.addEventListener('input', e => {
//                     p.textContent = e.target.value
//                 })
//             </script>
//         </body>
//     </html>

// blur event
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Document Object Model:30 Days Of JavaScript</title>
//     </head>
//     <body>
//         <h1>Giving feedback using blur event</h1>
//         <input type="text" id="mass" placeholder="say something" />
//         <p></p>
//         <script>
//             const input = document.querySelector('input')
//             const p = document.querySelector('p')
//         input.addEventListener('blur', (e) => {
//                 p.textContent = 'Field is required'
//             p.style.color = 'red'
//         })
//         </script>
//     </body>
// </html>

// keypress, keydow and keyup
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Document Object Model:30 Days Of JavaScript</title>
//     </head>

//     <body>
//         <h1>Key events: Press any key</h1>

//         <script>
//       document.body.addEventListener('keypress', e => {
//                 alert(e.keyCode)
//             })
//         </script>
//     </body>
// </html>