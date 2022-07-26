import { useState } from 'react'
import Captcha from './components/captcha'

function App() {

  return (
    <div className="App">
      <p>Please Verify captcha for go to page!</p>
      <Captcha length={6}/>
    </div>
  )
}

export default App
