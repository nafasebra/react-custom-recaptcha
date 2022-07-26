import { useState } from 'react'
import Captcha from './components/captcha'

function App() {

  return (
    <div className="App">
      <Captcha length={6}/>
    </div>
  )
}

export default App
