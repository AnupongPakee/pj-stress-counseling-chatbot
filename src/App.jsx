import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import STYLE from "./style/Style"
import CONTENT from "./content"
import TOAST from "./Toast"

function App() {
  const [toast, setToast] = useState({})

  setTimeout(() => {
    setToast({
      "show": "true",
      "status": "warn",
      "message": window.screen.width + "/" + window.screen.height
    })
  })

  return (
    <div className='container home' style={STYLE.container}>
      <div className="content-bg" style={STYLE['content-bg']}>
        <div className="bg-1" style={STYLE['bg-1']}></div>
        <div className="bg-2" style={STYLE['bg-2']}></div>
        <div className="bg-3" style={STYLE['bg-3']}></div>
      </div>
      <div className="content">
        <div className="left">
          <h1 style={STYLE.font_family['en']}>DPU <br /> Stress <br /> Counseling <br /> Chatbot</h1>
          <NavLink to={"/pj-stress-counseling-chatbot/login"} style={STYLE.font_family.th}>{CONTENT.home['th']['sign-in']}</NavLink>
          <NavLink to={"/pj-stress-counseling-chatbot/register"} style={STYLE.font_family.th}>{CONTENT.home['th']['sign-up']}</NavLink>
        </div>
      </div>
      <div className="not-support">
        <h1 style={STYLE.font_family.en}>Not <br /> Support <br /> Screen <br /> Size <br /> ({window.screen.width} / {window.screen.height}) <br /> 🥲</h1>
      </div>
      <TOAST data={toast}/>
    </div>
  )
}

export default App
