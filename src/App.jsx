import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello World in React + Vite.js</h1>
    <NavLink to={"/pj-stress-counseling-chatbot/register"}>Go to register</NavLink> <br />
    <NavLink to={"/pj-stress-counseling-chatbot/login"}>Go to Login</NavLink> <br />
    <NavLink to={"/pj-stress-counseling-chatbot/setting"}>Go to setting</NavLink> <br />
    <NavLink to={"/pj-stress-counseling-chatbot/admin"}>Go to admin</NavLink> <br />
    <NavLink to={"/pj-stress-counseling-chatbot/test"}>Go to test</NavLink>
    </>
  )
}

export default App
