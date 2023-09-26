import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <>
      <h1>My custom app</h1>

    </>
  )
}
// const reactElements = {
//   type: "a",
//   props: {
//       href: "https://google.com",
//       target: "_blank"
//   },
//   children: "Click here to visit google"
// }

// const reactElements2 = (
//   <a href="http://google.com" target='_blank'>click here to move on google</a>
// )

const reactElements2 = React.createElement(
  'a',
  { href: "https://facebook.com", target: "_blank" },
  "click here to visit facebook"
)

// this is the answer of question on App.jsx file's question
let userName = "usama"

let userElement = React.createElement(
  'p',
  null,
  'my name is ',
  userName
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  // <App />

  // MyApp()
  // </React.StrictMode>,

  // MyApp()

  // reactElements
  // reactElements1
  // reactElements2
  userElement

)
