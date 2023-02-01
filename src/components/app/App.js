import './App.css'
import Button from '../button/Button'
import Header from '../header/Header'
import Field from '../field/Field'


// const Header = () => {
// const text = 'hello world'

// const getText = text => {
//   return(
//     <div>
//       <h1>hello {text}</h1>
//       <p>
//         lorem20vsdvgfsbfg
//       </p>
//     </div>
//   )
// }

//   return <div>{getText('df')}</div>
// }

// const Field = () => {
//   const placeholder = 'Typing...'
//   const typeInput = 'text'

//   return <input type ={typeInput} placeholder={placeholder}></input>
// }

// const Button = () => {
//   const user = false
//   const login = 'login'
//   return <button>{user ? 'logout' : login}</button>
// }

function App() {
  return(
    <div className='App'>
      <Header/>
      <Field/>
      <Button />
    </div>
  )
}

export default App