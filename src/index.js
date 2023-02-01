import React, { StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/app/App'

// const el = <h1>Hello world</h1>

// const el = (
//   <div>
//     <h1 className='greeting'>
//       hello world
//     </h1>
//     <input type ='text'/>
//     <button>click</button>
//   </div>
// )


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
 <h1>hello world</h1>
  </StrictMode>
)